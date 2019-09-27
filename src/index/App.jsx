import React, {
  useCallback
} from 'react'
import { connect } from 'react-redux'
import './App.css';

import Header from '../common/Header';
import DepartDate from './DepartDate/DepartDate';
import HightSpeed from './HightSpeed/HightSpeed';
import Journey from './Journey/Journey';
import Submit from './Submit/Submit';

// 避免onBack的重新渲染
const onBack = useCallback(() => {
  window.history.back();
}, [])

function App (props) {
  return (
    <div>
      <Header title = "火车票" onBack = { onBack }/>
      <DepartDate/>
      <HightSpeed/>
      <Journey/>
      <Submit/>
    </div>
  ) 
}

function mapStateToProps(state) {}
function mapDispatchToProps (dispatch) {}

export default connect(mapStateToProps, mapDispatchToProps)(App);
