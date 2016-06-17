import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions/todos'

class AddTodoClass extends React.Component {
  constructor({dispatch}) {
    super()

    this.submit = this.submit.bind(this)

    this.dispatch = dispatch
  }

  submit(e) {
    e.preventDefault()

    var value = this.refs.todoText.value

    if (!value.trim()) return

    this.dispatch(addTodo(value))

    this.refs.todoText.value = ''
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input ref="todoText"/>
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
  }
}

const AddTodo = connect()(AddTodoClass)

export default AddTodo
