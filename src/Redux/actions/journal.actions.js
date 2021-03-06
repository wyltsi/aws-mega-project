export const journalActions = {
    getJournalData: () => ({
        type: "GET_JOURNAL_DATA"
    }),
    getJournalDataSuccess: (journalData) => ({
        type: "GET_JOURNAL_DATA_SUCCESS",
        journalData
    }),
    getJournalDataError: (journalError) => ({
        type: "GET_JOURNAL_DATA_ERROR",
        journalError
    }),
    addJournalEntry: (entry) => ({
        type: "ADD_JOURNAL_ENTRY",
        entry
    }),
    addJournalEntrySuccess: (entry) => ({
        type: "ADD_JOURNAL_ENTRY_SUCCESS",
        entry
    }),
    addJournalEntryError: (journalError) => ({
        type: "ADD_JOURNAL_ENTRY_ERROR",
        journalError
    }),
    deleteJournalEntry: (articleId) => ({
        type: "DELETE_JOURNAL_ENTRY",
        articleId
    }),
    deleteJournalEntrySuccess: () => ({
        type: "DELETE_JOURNAL_ENTRY_SUCCESS"
    }),
    deleteJournalEntryError: (deletingEntryError) => ({
        type: "DELETE_JOURNAL_ENTRY_SUCCESS",
        deletingEntryError
    })
}