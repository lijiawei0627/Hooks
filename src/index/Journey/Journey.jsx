import React from 'react';
import './Journey.css';
import switchImg from '../imgs/switch.svg'

function Journey (props) {
  const {
    to,
    from,
    exchangeFromTo,
    showCitySelector
  } = props;
  return (
    <div className="journey">
      <div className="journey-station" onClick = { () => showCitySelector(true) }>
        <input 
          readOnly
          type="text" 
          className="journey-input journey-from"
          name = "from"
          value = { from }
        />
      </div>
      <div className="journey-switch" onClick = { () => { exchangeFromTo(from, to) }}>
        <img src = { switchImg } width="70" height="40" alt=""/>
      </div>
      <div className="journey-station" onClick = {() => showCitySelector(false) }>
      <input 
          readOnly
          type="text" 
          className="journey-input journey-to"
          name = "to"
          value = { to }
        />
      </div>
    </div>
  )
}

export default Journey;
