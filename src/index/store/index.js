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

// import {
//   createStore,
//   combineReducers,
//   applyMiddleware
// } from 'redux';

// import reducers from './reducers';
// import thunk from 'redux-thunk';

// export default createStore(
//   combineReducers(reducers),
//   {
//      from: '北京',
//      to: '上海',
//      //  城市选择浮层开关
//      isCitySelectVisible: false,
//      currentSelectingLeftCity: false,
//      //  城市选择浮层上所有的数据，需要异步加载 
//      cityData: null,
//      //  当前是否正在加载城市数据，节流操作
//      isLoadingCityData: false,
//      //  日期选择浮层开关
//      isDateSelectorVisible: false,
//      //  是否选择了高铁
//      hightSpeed: false
//   },
//   applyMiddleware(thunk)
// )
