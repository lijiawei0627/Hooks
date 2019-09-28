import React, { useState } from 'react';
import classnames from 'classnames';

import './CitySelector.css'

function CitySelector (props) {
  const [searchKey, setSearchKey] = useState('');

  const { show, isLoading, data, onBack } = props;

  return (
    <div className = { classnames('city-selector', { hidden: !show }) }>
      <div className="city-search">
        <div className="search-back" onClick={() => onBack()}>
            <svg width="42" height="42">
                <polyline
                    points="25,13 16,21 25,29"
                    stroke="#fff"
                    strokeWidth="2"
                    fill="none"
                />
            </svg>
        </div>
        <div className="search-input-wrapper">
            <input
                type="text"
                value={searchKey}
                className="search-input"
                placeholder="城市、车站的中文或拼音"
                onChange={e => setSearchKey(e.target.value)}
            />
        </div>
        <i
          onClick={() => setSearchKey('')}
          className={classnames('search-clean', {
              hidden: searchKey.length === 0,
          })}>&#xf063;</i>
      </div>
    </div>
  )
}

export default CitySelector
