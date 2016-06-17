import React, {PropTypes} from 'react'
import {TodoShape} from '../shapes'
import TodoContainer from '../containers/TodoContainer'

const Todos = ({todos}) => {

  return todos.isFetching ?
    <span>Loading...</span> :
    <ul>
      {todos.list.map(todo => {
        return <TodoContainer todo={todo} key={todo.id}/>
      })}
    </ul>
}

Todos.propTypes =  {
  todos: PropTypes.shape({
    list: PropTypes.arrayOf(TodoShape).isRequired,
    isFetching: PropTypes.bool.isRequired
  })
}

export default Todos
