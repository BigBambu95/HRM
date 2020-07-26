import React from 'react';
import PropTypes from 'prop-types';

const TableCell = ({ children }) => (
  <div className="table-cell">
    {children}
  </div>
);

TableCell.propTypes = {
  children: PropTypes.node,
};

TableCell.defaultProps = {
  children: null,
};

export default TableCell;
