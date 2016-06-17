import React from 'react'
import {Link} from 'react-router'
import TodosContainer from '../containers/TodosContainer'
import AddTodoContainer from '../containers/AddTodoContainer'

const App = ()=> (
  <div>
    <AddTodoContainer></AddTodoContainer>
    <TodosContainer></TodosContainer>
    <Link to="/foo">Home</Link>
  </div>
)

export default App
module.exports = App