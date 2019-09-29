import React, { useState, useMemo, useEffect, useCallback } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import CityList from './CityList';
import Suggest from './Suggest'

import './CitySelector.css'

function CitySelector (props) {
  const [searchKey, setSearchKey] = useState('');
  
  // 性能优化
  const key = useMemo(() => searchKey.trim(), [searchKey]);

  const { show, isLoading, cityData, onBack, doFetchCityData, onSelect } = props;

  // 获取城市列表数据
  useEffect(() => {
    if (!show || cityData || isLoading) {
        return;
    }

    doFetchCityData();
}, [show, cityData, isLoading, doFetchCityData]);

  const toAlpha = useCallback(alpha => {
    document.querySelector(`[data-cate='${alpha}']`).scrollIntoView();
  }, []);

  // 定义渲染城市列表函数
  const outputCitySections = () => {
    if (isLoading) {
        return <div>loading</div>;
    }

    if (cityData) {
        return (
            <CityList
                sections={ cityData.cityList }
                onSelect={ onSelect }
                toAlpha={ toAlpha }
            />
        );
    }

    return <div>error</div>;
};

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
                value={ searchKey }
                className="search-input"
                placeholder="城市、车站的中文或拼音"
                onChange={e => setSearchKey(e.target.value)}
            />
        </div>
        <i
          onClick={() => setSearchKey('')}
          className={classnames('search-clean', {
              hidden: key.length === 0,
          })}>&#xf063;</i>
      </div>
      {Boolean(key) && (
        <Suggest searchKey={key} onSelect={key => onSelect(key)} />
      )}
      { outputCitySections() }
    </div>
  )
}


CitySelector.propTypes = {
  show: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired, 
  cityData: PropTypes.object, 
  onBack: PropTypes.func.isRequired
}

export default CitySelector
