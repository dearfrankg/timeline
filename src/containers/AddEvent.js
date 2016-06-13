import {connect} from 'react-redux'
import * as actions from 'actions'
import AddEvent from 'components/AddEvent'

const mapStateToProps = (state) => {
  return {
    showModal: state.UI.modal.showModal,
    activeEvent: state.sheets.activeEvent,
    worksheetName: state.UI.timelineSelect
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddEventClick: () => {
      dispatch(actions.setModalEvent({}))
      dispatch(actions.openModal())
    },
    onModalClose: () => {
      dispatch(actions.closeModal())
      dispatch(actions.setModalEvent({}))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEvent)
