import React, {PropTypes} from 'react'
import {TodoShape} from '../shapes'

const Todo = ({todo, toggleTodo})=> (
  <li>
    <a href="javascript:void(0)"
       onClick={toggleTodo}
       style={{
         textDecoration: todo.completed ? 'line-through' : 'none'
       }}>
      ID: {todo.id} {todo.text}
    </a>
  </li>
)

Todo.propTypes = {
  todo: TodoShape
}

export default Todo
