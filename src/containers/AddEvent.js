import {connect} from 'react-redux'
import * as actions from 'actions'
import AddEvent from 'components/AddEvent'

const mapStateToProps = (state) => {
  return {
    showModal: state.modal.showModal,
    modalEvent: state.modal.modalEvent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddEventClick: (id) => dispatch(actions.openModal(id)),
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
