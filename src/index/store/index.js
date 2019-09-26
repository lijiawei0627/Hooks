import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import reducers from './reducers';
import thunk from 'redux-thunk';

export default createStore(
  combineReducers(reducers),
  {
     from: '北京',
     to: '上海',
     //  城市选择浮层开关
     isCitySelectVisible: false,
     currentSelectingLeftCity: false,
     //  城市选择浮层上所有的数据，需要异步加载 
     cityData: null,
     //  当前是否正在加载城市数据，节流操作
     isLoadingCityData: false,
     //  日期选择浮层开关
     isDateSelectorVisible: false,
     //  是否选择了高铁
     hightSpeed: false
  },
  applyMiddleware(thunk)
)
