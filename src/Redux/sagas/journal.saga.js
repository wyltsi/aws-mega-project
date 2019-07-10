import axios from "axios";
import { journalActions } from "../actions/journal.actions";
import { call, put, takeLatest, all } from "redux-saga/effects";
import AWS from "aws-sdk";
import Amplify from "aws-amplify";
import awsconfig from "../../aws-exports";
Amplify.configure({
	...awsconfig,
	Analytics: {
		disabled: true
	}
});

export const setToken = () => ({
	token: "token-code-id-from-whatever"
});

export function* getJournalData() {
	try {
		yield call(setToken);
		const response = yield call(
			axios.get,
			"https://1pdnaqc6we.execute-api.eu-west-1.amazonaws.com/dev/articles"
		);
		const items = response.data.Items.map(item =>
			AWS.DynamoDB.Converter.unmarshall(item)
		);
		yield put(journalActions.getJournalDataSuccess(items));
	} catch (e) {
		console.log("Error while getting journal data:", e);
		yield put(journalActions.getJournalDataError(e));
	}
}

export function* addJournalEntry(entry) {
	try {
		console.log("I am actually in the saga with entry:", entry);
		/* const credentials = yield Auth.currentCredentials()
        const db = new DynamoDB.DocumentClient({ credentials: Auth.essentialCredentials(credentials)});

        // setup the query params
        var params = {
            TableName : "blahblahprojectv-mobilehub-1547222168-blah blahblah",
            ProjectionExpression:"hub_id, details.on_time, details.sensor_name",
            KeyConditionExpression: "hub_id = :hid",
            ExpressionAttributeValues: {
                ":hid":"PG2018f"
            }
        }; */

		yield put(journalActions.addJournalEntrySuccess());
	} catch (e) {
		console.log("Updating journal entry failed:", e);
		yield put(journalActions.addJournalEntryError(e));
	}
}

export function* journalSaga() {
	yield all([
		takeLatest("GET_JOURNAL_DATA", getJournalData),
		takeLatest("ADD_JOURNAL_ENTRY", addJournalEntry)
	]);
}
