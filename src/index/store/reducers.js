import * as Types from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    from: '北京',
    to: '上海',
    //  城市选择浮层开关
    isCitySelectVisible: false,
    // 选择的是始发站还是终点站
    currentSelectingLeftCity: false,
    //  城市选择浮层上所有的数据，需要异步加载 
    cityData: null,
    //  当前是否正在加载城市数据，节流操作
    isLoadingCityData: false,
    //  日期选择浮层开关
    isDateSelectorVisible: false,
    //  是否选择了高铁
    hightSpeed: false
 });

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch(type) {
        case Types.ACTION_SET_FROM:
            return state.set('from', payload);
        case Types.ACTION_SET_TO:
            return state.set('to', payload);
        case Types.ACTION_SET_IS_CITY_SELECTOR_VISIBLE:
            return state.set('isCitySelectVisible', payload);
        case Types.ACTION_SET_CURRENT_SELECTING_LEFT_CITY:
            return state.set('currentSelectingLeftCity', payload);
        case Types.ACTION_SET_CITY_DATA:
            return state.set('cityData', payload);
        case Types.ACTION_SET_IS_LOADING_CITY_DATA:
            return state.set('isLoadingCityData', payload);
        case Types.ACTION_SET_IS_DATE_SELECTOR_VISIBLE:
            return state.set('isDateSelectorVisible', payload);
        case Types.ACTION_SET_HIGH_SPEED:
            return state.set('hightSpeed', payload);
        case Types.ACTION_SET_DEPART_DATE:
            return payload;
      default:
        return state;
    }
  }

// export default {
//   from(state = '北京', action) {
//     const { type, payload } = action;
//     switch (type) {
//         case Types.ACTION_SET_FROM:
//             return payload;
//         default:
//     }

//     return state;
//   },
//   to(state = '上海', action) {
//       const { type, payload } = action;
//       switch (type) {
//           case Types.ACTION_SET_TO:
//               return payload;
//           default:
//       }

//       return state;
//   },
//   isCitySelectorVisible(state = false, action) {
//       const { type, payload } = action;
//       switch (type) {
//           case Types.ACTION_SET_IS_CITY_SELECTOR_VISIBLE:
//               return payload;
//           default:
//       }

//       return state;
//   },
//   currentSelectingLeftCity(state = false, action) {
//       const { type, payload } = action;
//       switch (type) {
//           case Types.ACTION_SET_CURRENT_SELECTING_LEFT_CITY:
//               return payload;
//           default:
//       }

//       return state;
//   },
//   cityData(state = null, action) {
//       const { type, payload } = action;
//       switch (type) {
//           case Types.ACTION_SET_CITY_DATA:
//               return payload;
//           default:
//       }

//       return state;
//   },
//   isLoadingCityData(state = false, action) {
//       const { type, payload } = action;
//       switch (type) {
//           case Types.ACTION_SET_IS_LOADING_CITY_DATA:
//               return payload;
//           default:
//       }

//       return state;
//   },
//   isDateSelectorVisible(state = false, action) {
//       const { type, payload } = action;
//       switch (type) {
//           case Types.ACTION_SET_IS_DATE_SELECTOR_VISIBLE:
//               return payload;
//           default:
//       }

//       return state;
//   },
//   highSpeed(state = false, action) {
//       const { type, payload } = action;
//       switch (type) {
//           case Types.ACTION_SET_HIGH_SPEED:
//               return payload;
//           default:
//       }

//       return state;
//   },
//   departDate(state = Date.now(), action) {
//       const { type, payload } = action;
//       switch (type) {
//           case Types.ACTION_SET_DEPART_DATE:
//               return payload;
//           default:
//       }

//       return state;
//   }
// };