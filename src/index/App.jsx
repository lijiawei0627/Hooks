import React, {
  useCallback
} from 'react'
import { connect } from 'react-redux'
import './App.css';

import Header from '../common/Header/Header';
import DepartDate from './DepartDate/DepartDate';
import HightSpeed from './HightSpeed/HightSpeed';
import Journey from './Journey/Journey';
import Submit from './Submit/Submit';
import CitySelector from '../common/CitySelector/CitySelector.jsx';

// 取出actionCreators，用来创造action
import {
  exchangeFromTo,
  showCitySelector,
  hideCitySelector,
  fetchCityData,
  setSelectedCity
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
    setSelectedCity
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

  return (
    <div>
      <Header title = "火车票" onBack = { onBack }/>
      <form action="" className = 'form'>
        <DepartDate/>
        <HightSpeed/>
        <Journey 
          from = { from } 
          to = { to }
          exchangeFromTo = { doExchangeFromTo }
          showCitySelector = { doShowCitySelector }
        />
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
    isLoadingCityData: state.get('isLoadingCityData')
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
    }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
