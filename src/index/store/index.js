import {createStore, compose, applyMiddleware} from 'redux'
import reducer from './reducers.js'
import thunk from 'redux-thunk'

// 应用（Chrome）Redux插件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const store = createStore(reducer, composeEnhancers(
  // 使用redux-thunk，在action中异步获取数据
  applyMiddleware(thunk)
))

export default store;
