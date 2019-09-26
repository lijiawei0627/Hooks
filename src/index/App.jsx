import React from 'react'
import { connect } from 'react-redux'
import './App.css';

import Header from '../common/Header';
import DepartDate from './DepartDate/DepartDate';
import HightSpeed from './HightSpeed/HightSpeed';
import Journey from './Journey/Journey';
import Submit from './Submit/Submit';

function App (props) {
  return (
    <div>
      <Header/>
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
