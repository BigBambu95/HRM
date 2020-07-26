import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ data, children }) => (
  <div className="table-row">
    {
              React.Children.map(children, (child) => React.cloneElement(child, { data }))
          }
  </div>
);

TableRow.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default TableRow;
