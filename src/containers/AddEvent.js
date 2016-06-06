import {connect} from 'react-redux'
import * as actions from 'actions'
import AddEvent from 'components/AddEvent'

const mapStateToProps = (state) => {
  return {
    modal: state.modal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddEventClick: (id) => dispatch(actions.openModal(id)),
    setModalToFalse: () => dispatch(actions.closeModal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEvent)
