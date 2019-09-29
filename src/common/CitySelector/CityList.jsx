import React, { memo } from 'react';
import PropTypes from 'prop-types';

const CityItem = memo(function CityItem(props) {
  const { name, onSelect } = props;

  return (
      <li className="city-li" onClick={() => onSelect(name)}>
          { name }
      </li>
  );
});

CityItem.propTypes = {
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};


const CitySection = memo(function CitySection(props) {
  const { title, cities = [], onSelect } = props;

  return (
      <ul className="city-ul">
          <li className="city-li" key="title" data-cate={ title }>
              { title }
          </li>
          { cities.map(city => {
              return (
                  <CityItem
                      key={ city.name }
                      name={ city.name }
                      onSelect={ onSelect }
                  />
              );
          }) }
      </ul>
  );
});

CitySection.propTypes = {
  title: PropTypes.string.isRequired,
  cities: PropTypes.array,
  onSelect: PropTypes.func.isRequired,
};

const AlphaIndex = memo(function AlphaIndex(props) {
  const { alpha, onClick } = props;

  return (
      <i className="city-index-item" onClick={() => onClick(alpha)}>
          { alpha }
      </i>
  );
});

AlphaIndex.propTypes = {
  alpha: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const alphabet = Array.from(new Array(26), (ele, index) => {
  return String.fromCharCode(65 + index);
});

function CityList (props) {
  const { sections, toAlpha, onSelect } = props;

  return (
      <div className="city-list">
          <div className="city-cate">
              { sections.map(section => {
                  return (
                      <CitySection
                          key={ section.title }
                          title={ section.title }
                          cities={ section.citys }
                          onSelect={ onSelect }
                      />
                  );
              }) }
          </div>
          <div className="city-index">
              { alphabet.map(alpha => {
                  return (
                      <AlphaIndex
                          key={ alpha }
                          alpha={ alpha }
                          onClick={ toAlpha }
                      />
                  );
              }) }
          </div>
      </div>
  );
};

CityList.propTypes = {
  sections: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  toAlpha: PropTypes.func.isRequired,
};

export default CityList
