const cloneList = (list)=> {
  return list.map(item=> Object.assign({}, item))
}

const todos = (state = {
  list: [],
  isFetching: false
}, action = null) => {
  switch (action.type) {
    case 'GET_TODOS': {
      state = Object.assign({}, state, {isFetching: true})

      state.list = cloneList(state.list)

      return state
    }
    case 'RECIVED_TODOS': {
      return Object.assign({}, state, {isFetching: false, list: action.todos})
    }
    case 'ADD_TODO': {
      state = Object.assign({}, state)

      state.list = cloneList(state.list)

      state.list.push(action.todo)

      return state
    }
    case 'TOGGLE_TODO': {
      state = Object.assign({}, state)

      state.list = cloneList(state.list)

      state.list[action.todoId].completed = !state.list[action.todoId].completed

      return state
    }
    default: return state
  }
}

export default todos
