export const initialState = () => ({
    journalData: [],
    loading: false,
    error: "",
    updateError: "",
    deletingEntry: false
})

const journalReducer = (state = initialState(), action) => {
    const { type } = action;
    switch (type) {
        case "GET_JOURNAL_DATA":
            return {
                ...state,
                loading: true
            };
        case "GET_JOURNAL_DATA_SUCCESS":
            return {
                ...state,
                journalData: action.journalData,
                loading: false
            }
        case "GET_JOURNAL_DATA_ERROR":
            return {
                ...state,
                error: action.journalError,
                loading: false
            }
        case "ADD_JOURNAL_ENTRY":
            return {
                ...state,
                loading: true
            }
        case "ADD_JOURNAL_ENTRY_SUCCESS":
            return {
                ...state,
                updatedEntry: action.updatedEntry,
                loading: false
            }
        case "ADD_JOURNAL_ENTRY_ERROR":
            return {
                ...state,
                addEntryError: action.addEntryError,
                loading: false
            }
        case "DELETE_JOURNAL_ENTRY":
            return {
                ...state,
                deletingEntry: true
            }
        case "DELETE_JOURNAL_ENTRY_SUCCESS":
            return {
                ...state,
                deletingEntry: false
            }
        case "DELETE_JOURNAL_ENTRY_ERROR":
            return {
                ...state,
                deletingEntry: false,
                deletingEntryError: action.deletingEntryError
            }
        default:
            return state;
    }
}

export default journalReducer;