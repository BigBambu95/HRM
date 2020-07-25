import React from 'react';
import PropTypes from 'prop-types';

import Select from "../select";

const Filter = ({ label, items, filter, icon, defaultValue }) => {

  return(
    <div className="filter">
        <span className="filter__label">{label}</span>
        <Select 
          items={items}
          getSelectValue={filter} 
          label={label}
          icon={icon}
          defaultValue={defaultValue}
        />
    </div>
  )
};


Filter.defaultProps = {
  label: '',
  items: [],
  itemsValue: []
};

Filter.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  itemsValue: PropTypes.array
};

export default Filter;