import React from 'react';
import classnames from 'classnames';

import './CitySelector.css'

function CitySelector (props) {
  const { show, isLoading, data } = props;

  classnames('city-selector', {
    hidden: !show
  })

  return (
    <div className = { classnames('city-selector', { hidden: !show }) }>
      app
    </div>
  )
}

export default CitySelector
