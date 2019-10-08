import React, { useState, useEffect, useMemo, memo } from 'react';
import PropTypes from 'prop-types';

const SuggestItem = memo(function SuggestItem(props) {
  const { name, onClick, setSearchKey } = props;

  return (
      <li className="city-suggest-li" onClick={() => {
        onClick(name);
        // 选定搜索结果之后，清空搜索关键字
        setSearchKey('');
      }}>
          { name }
      </li>
  );
});

SuggestItem.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Suggest = memo(function Suggest(props) {
  const { searchKey, onSelect, setSearchKey } = props;

  const [result, setResult] = useState([]);

  useEffect(() => {
      let data = JSON.parse(localStorage.getItem('city_data_cache'));
      let cityList = data.data.cityList;
      let { length } = cityList;
      // 使用cities数组存储所有城市
      let cities = [];
      for (let i = 0; i < length; i++) {
          let len = cityList[i].citys ? cityList[i].citys.length : 0;
        for (let j = 0; j < len; j++) {
            cities.push(cityList[i].citys[j]);
        }
      }
      let reg = new RegExp(searchKey, 'g');
      let filterCity = cities.filter(item => reg.test(item.name));
      //   
      if (!filterCity.toString()) {
          return;
      }
      setResult(filterCity);
    //   setResult(filterCity)
    //   cities.filter((item) => {})
    //   console.log(data.data.cityList)
    //   fetch('/rest/search?key=' + encodeURIComponent(searchKey))
    //       .then(res => console.log(res))
    //       .then(data => {
    //           const { result, searchKey: sKey } = data;

    //           if (sKey === searchKey) {
    //               setResult(result);
    //           }
    //       })
    //       .catch(error => {
    //           console.log(error)
    //       })
  }, [searchKey]);

  //   对搜索结果进行简单处理
  const fallBackResult = useMemo(() => {
      if (!result.length) {
          return [
              {
                  name: searchKey,
              },
          ];
      }

      return result;
  }, [result, searchKey]);

  return (
      <div className="city-suggest">
          <ul className="city-suggest-ul">
              { fallBackResult.map(item => {
                  return (
                      <SuggestItem
                          key={ item.name }
                          name={ item.name }
                          onClick={ onSelect }
                          setSearchKey = { setSearchKey }
                      />
                  );
              }) }
          </ul>
      </div>
  );
});

Suggest.propTypes = {
  searchKey: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Suggest