import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ children }) => {
    return (
        <div className="table">
            <div className="table__body">
             {children}
            </div>
        </div>
    )
};


Table.defaultProps = {
  data: [],
  children: null
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  children: PropTypes.node
};

export default Table;