import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {CarsActionCreators} from '../actions'
import {Cars, ICarsProps, ICarsState} from '../components/Cars'

function mapStateToProps(state):ICarsState {
  return {cars: state.cars}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CarsActionCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Cars)