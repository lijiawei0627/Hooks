import * as Types from './actionTypes';

// 改变出发站
export function setFrom (from) {
  return {
    type: Types.ACTION_SET_FROM,
    payload: from
  };
}

// 改变终点站
export function setTo (to) {
  console.log('to')
  return {
    type: Types.ACTION_SET_TO,
    payload: to
  };
}

// 改变加载城市数据状态
export function setIsLoadingCityData (isLoadingCityData) {
  return {
    type: Types.ACTION_SET_IS_LOADING_CITY_DATA,
    payload: isLoadingCityData
  };
}

// 加载城市数据
export function setCityData (cityDate) {
  return {
    type: Types.ACTION_SET_CITY_DATA,
    payload: cityDate
  };
}

// 是否选择高铁
export function toggleHightSpeed () {
  return (dispatch, getState) => {
    const { hightSpeed } = getState();
    dispatch({
      type: Types.ACTION_SET_HIGH_SPEED,
      payload: !hightSpeed
    })
  };
}

// 打开城市选择浮层，判断是打开的始发站选择还是终点站选择
export function showCitySelector (currentSelectingLeftCity) {
  return (dispatch) => {
    dispatch({
      type: Types.ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
      payload: true
    });

    dispatch({
      type: Types.ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
      payload: currentSelectingLeftCity
    });
  };
}

// 关闭城市选择浮层
export function hideCitySelector () {
  return {
    type: Types.ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
    payload: false
  };
}

// 判断选择的是始发站还是终点站
export function setSelectedCity (city) {
  return (dispatch, getState) => {
    const { currentSelectingLeftCity } = getState();
     
    // 如果选择的是始发站，就填入始发站，反之填入终点站
    if (currentSelectingLeftCity) {
      dispatch(setFrom(city))
    } else {
      dispatch(setTo(city))
    }
  }
}

// 日期选择浮层打开
export function showDateSelector() {
  return {
      type: Types.ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
      payload: true,
  };
}

// 日期选择浮层关闭
export function hideDateSelector() {
  return {
      type: Types.ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
      payload: false,
  };
}

// 调换始发站和终点站
export function exchangeFromTo(from, to) {
  return (dispatch) => {
      dispatch(setFrom(to));
      dispatch(setTo(from));
  };
}

export function setDepartDate(departDate) {
  return {
      type: Types.ACTION_SET_DEPART_DATE,
      payload: departDate,
  };
}

export function fetchCityData() {
  return (dispatch, getState) => {
      const { isLoadingCityData } = getState();

      if (isLoadingCityData) {
          return;
      }

      const cache = JSON.parse(
          localStorage.getItem('city_data_cache') || '{}'
      );

      if (Date.now() < cache.expires) {
          dispatch(setCityData(cache.data));

          return;
      }

      dispatch(setIsLoadingCityData(true));

      fetch('/rest/cities?_' + Date.now())
          .then(res => res.json())
          .then(cityData => {
              dispatch(setCityData(cityData));

              localStorage.setItem(
                  'city_data_cache',
                  JSON.stringify({
                      expires: Date.now() + 60 * 1000,
                      data: cityData,
                  })
              );

              dispatch(setIsLoadingCityData(false));
          })
          .catch(() => {
              dispatch(setIsLoadingCityData(false));
          });
  };
}
