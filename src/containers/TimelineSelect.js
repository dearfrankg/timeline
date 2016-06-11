import { connect } from 'react-redux'
import TimelineSelect from 'components/TimelineSelect'
import * as actions from 'actions'
import {alphaSort} from 'utils'

const mapStateToProps = (state) => {
  return {
    items: Object.keys(state.sheets.worksheets).sort(alphaSort)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelect: (e) => dispatch(actions.selectTimeline(e.target.value))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineSelect)
