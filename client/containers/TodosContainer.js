import {connect} from 'react-redux'
import Todos from '../components/Todos'

const mapStateToProps = (state)=> {
  return {todos: state.todos}
}

const TodosContainer = connect(
  mapStateToProps
)(Todos)

export default TodosContainer
