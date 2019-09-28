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

import {
  exchangeFromTo,
  showCitySelector
} from './store/actionCreators'


function App (props) {
  const {
    from, 
    to,
    exchangeFromTo,
    showCitySelector,
    isCitySelectVisible,
    cityData,
    isLoadingCityData
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
        data = { cityData }
        isLoading = { isLoadingCityData }
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
    exchangeFromTo () {
      const action = exchangeFromTo();
      dispatch(action)
    },
    showCitySelector (m) {
      const action = showCitySelector(m);
      dispatch(action)
    }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
