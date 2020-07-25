import React from 'react';
import PropTypes from 'prop-types';


const TableRow = ({ data, children }) => {

  return(
      <div className="table-row">
          {
              React.Children.map(children, child => {
                return React.cloneElement(child, { data });
              })
          }
      </div>
  )
};

TableRow.propTypes = {
    data: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
};

export default TableRow;