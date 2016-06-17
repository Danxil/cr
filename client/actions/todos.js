import fetch from 'isomorphic-fetch'

let nextTodoId = 3

export const getTodos = () => {
  return {
    type: 'GET_TODOS',
  }
}

export const recivedTodos = (todos) => {
  return {
    type: 'RECIVED_TODOS',
    todos
  }
}

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    todo: {
      id: nextTodoId++,
      completed: false,
      text
    }
  }
}

export const toggleTodo = (todoId) => {
  return {
    type: 'TOGGLE_TODO',
    todoId
  }
}


export const fetchTodos = ()=> {
  return (dispatch)=> {
    dispatch(getTodos())

    return new Promise(resolve=> {
      setTimeout(()=> {
        var arr = [{
          text: 'a1',
          completed: false,
          id: 0
        }, {
          text: 'a2',
          completed: false,
          id: 1
        }, {
          text: 'a2',
          completed: false,
          id: 2
        }]

        dispatch(recivedTodos(arr))
      }, 1000)
    })
  }
}