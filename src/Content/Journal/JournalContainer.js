import { connect } from 'react-redux'
import { journalActions } from "../../Redux/actions/journal.actions"
import { userActions } from "../../Redux/actions/user.actions"
import Journal from './Journal'

const mapStateToProps = (state, ownprops) => ({
    loading: state.journal.loading,
    journalData: state.journal.journalData,
    authData: ownprops.authData
})

const mapDispatchToProps = (dispatch) => ({
    actions: {
        getJournalData: () => dispatch(journalActions.getJournalData()),
        toggleLoginModal: () => dispatch(userActions.toggleLoginModal()),
        logout: () => dispatch(userActions.logout()),
        addJournalEntry: (entry) => dispatch(journalActions.addJournalEntry(entry))
    }
})

const JournalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Journal)

export default JournalContainer;