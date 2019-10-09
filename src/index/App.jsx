import React, {
  useCallback
} from 'react'
import { connect } from 'react-redux'
import './App.css';
import { h0 } from '../common/fp'

import Header from '../common/Header/Header';
import DepartDate from './DepartDate/DepartDate';
import HightSpeed from './HightSpeed/HightSpeed';
import Journey from './Journey/Journey';
import Submit from './Submit/Submit';
import CitySelector from '../common/CitySelector/CitySelector.jsx';
import DateSelector from '../common/DateSelector/DateSelector';

// 取出actionCreators，用来创造action
import {
  exchangeFromTo,
  showCitySelector,
  hideCitySelector,
  fetchCityData,
  setSelectedCity,
  hideDateSelector,
  showDateSelector,
  setDepartDate
} from './store/actionCreators'


function App (props) {
  // 从mapDispatchToProps中取出方法
  const {
    from, 
    to,
    exchangeFromTo,
    showCitySelector,
    isCitySelectVisible,
    cityData,
    isLoadingCityData,
    hideCitySelector,
    fetchCityData,
    setSelectedCity,
    isDateSelectorVisible,
    hideDateSelector,
    departDate,
    showDateSelector,
    setDepartDate
  } = props;
  // 避免onBack的重新渲染
  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  const doExchangeFromTo = useCallback(() => {
    exchangeFromTo()
  }, [exchangeFromTo]);

  const doShowCitySelector = useCallback((m) => {
    showCitySelector(m)
  }, [showCitySelector]);

  const doCitySelectorCbs = useCallback(() => {
    hideCitySelector();
  }, [hideCitySelector])

  const doFetchCityData = useCallback(() => {
    fetchCityData();
  }, [fetchCityData])

  const doSetSelectedCity = useCallback((e) => {
    setSelectedCity(e);
  }, [setSelectedCity])

  const doHideDateSelector = useCallback(() => {
     hideDateSelector();
  }, [hideDateSelector])

  const doShowDateSelector = useCallback(() => {
    showDateSelector();
  }, [showDateSelector])

  // 日期选择
  const doSelectDate = useCallback(day => {
    if (!day) {
        return;
    }

    if (day < h0()) {
        return;
    }
    setDepartDate(day)
    hideDateSelector();
}, [setDepartDate, hideDateSelector]);

  return (
    <div>
      <Header title = "火车票" onBack = { onBack }/>
      <form action="" className = 'form'>
        <Journey 
          from = { from } 
          to = { to }
          exchangeFromTo = { doExchangeFromTo }
          showCitySelector = { doShowCitySelector }
        />
        <DepartDate 
          time = { departDate }
          onClick = { doShowDateSelector }
        />
        <HightSpeed/>
        <Submit/>
      </form>
      <CitySelector
        show = { isCitySelectVisible }
        cityData = { cityData }
        isLoading = { isLoadingCityData }
        onBack = { doCitySelectorCbs }
        doFetchCityData = { doFetchCityData }
        onSelect = { doSetSelectedCity }
      />
      <DateSelector
        show = { isDateSelectorVisible }
        onBack = { doHideDateSelector }
        onSelect = { doSelectDate }
      />
    </div>
  ) 
}

function mapStateToProps(state) {
  return {
    from: state.get('from'),
    to: state.get('to'),
    exchangeFromTo: state.get('exchangeFromTo'),
    showCitySelector: state.get('showCitySelector'),
    isCitySelectVisible: state.get('isCitySelectVisible'),
    cityData: state.get('cityData'),
    isLoadingCityData: state.get('isLoadingCityData'),
    isDateSelectorVisible: state.get('isDateSelectorVisible'),
    departDate: state.get('departDate')
  };
}
function mapDispatchToProps (dispatch) {
  return { 
    // 切换始发站和终点站
    exchangeFromTo () {
      const action = exchangeFromTo();
      dispatch(action);
    },
    // 打开城市选择浮层
    showCitySelector (m) {
      const action = showCitySelector(m);
      dispatch(action);
    },
    // 隐藏城市选择浮层
    hideCitySelector () {
      const action = hideCitySelector();
      dispatch(action);
    },
    fetchCityData () {
      const action = fetchCityData();
      dispatch(action);
    },
    setSelectedCity (city) {
      const action = setSelectedCity(city);
      dispatch(action);
    },
    // 隐藏日期选择浮层
    hideDateSelector () {
      const action = hideDateSelector();
      dispatch(action);
    },
    showDateSelector () {
      const action = showDateSelector();
      dispatch(action);
    },
    setDepartDate (day) {
      const action = setDepartDate(day);
      dispatch(action);
    }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
