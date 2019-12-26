import axios from "axios";
import { journalActions } from "../actions/journal.actions";
import { call, put, takeLatest, all } from "redux-saga/effects";
import AWS from "aws-sdk";
import { Auth } from 'aws-amplify';
import moment from "moment";
import sortBy from "lodash/sortBy";

function sortByDate(items) {
	const sortedItems = sortBy(items, item => {
		return new moment(item.date);
	}).reverse();
	console.log("returning sorted items;", sortedItems);
	return sortedItems;
}

export function* getJournalData() {
	try {
		const response = yield call(
			axios.get,
			"https://1pdnaqc6we.execute-api.eu-west-1.amazonaws.com/dev/articles"
		);
		const items = response.data.Items.map(item =>
			AWS.DynamoDB.Converter.unmarshall(item)
		);
		
		yield put(journalActions.getJournalDataSuccess(sortByDate(items)));
	} catch (e) {
		console.log("Error while getting journal data:", e);
		yield put(journalActions.getJournalDataError(e));
	}
}

export function* addJournalEntry(payload) {
	try {
		const url = "https://87c65cn6g2.execute-api.eu-west-1.amazonaws.com/dev/articles";
		const currentUser = yield Auth.currentAuthenticatedUser();
		const token = currentUser.signInUserSession.idToken.jwtToken;

		const item = {
			TableName: "articles",
			Item: AWS.DynamoDB.Converter.marshall(payload.entry)
		};

		const params = {
			withCredentials: true,
			headers: {
				Authorization: token,
				'Content-Type': 'application/json'
			}
		};

		const response = yield call(axios.post, url, item, params);
		yield put(journalActions.addJournalEntrySuccess(response));
		yield put({ type: "GET_JOURNAL_DATA" })
	} catch (e) {
		console.log("Updating journal entry failed:", e);
		yield put(journalActions.addJournalEntryError(e));
	}
}

export function* deleteJournalEntry(payload) {
	try {
		const url = "https://87c65cn6g2.execute-api.eu-west-1.amazonaws.com/dev/articles";
		const currentUser = yield Auth.currentAuthenticatedUser();
		const token = currentUser.signInUserSession.idToken.jwtToken;

		const articleId = payload.articleId;

		const params = {
			withCredentials: true,
			headers: {
				Authorization: token,
				'Content-Type': 'application/json'
			}
		};

		yield call(axios.delete, url + `/${articleId}`, params);
		yield put(journalActions.deleteJournalEntrySuccess());
		yield put({ type: "GET_JOURNAL_DATA" })
	} catch (e) {
		console.log("Deleting journal entry failed:", e);
		yield put(journalActions.addJournalEntryError(e));
	}
}

export function* journalSaga() {
	yield all([
		takeLatest("GET_JOURNAL_DATA", getJournalData),
		takeLatest("ADD_JOURNAL_ENTRY", addJournalEntry),
		takeLatest("DELETE_JOURNAL_ENTRY", deleteJournalEntry)
	]);
}
