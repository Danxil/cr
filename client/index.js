import 'babel-polyfill'
import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import Foo from './components/Foo'
import thunkMiddleware from 'redux-thunk'
import {fetchTodos} from './actions/todos'

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

const history = syncHistoryWithStore(browserHistory, store)

store.dispatch(fetchTodos())

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="foo" component={Foo}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
