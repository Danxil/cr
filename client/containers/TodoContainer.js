import {connect} from 'react-redux'
import Todo from '../components/Todo'
import {toggleTodo} from '../actions/todos'

const mapStateToProps = (state, ownProps)=> ({todo: ownProps.todo})

const mapDispatchToProps = (dispatch, ownProps)=> ({
  toggleTodo: ()=> dispatch(toggleTodo(ownProps.todo.id))
})

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

export default TodoContainer
