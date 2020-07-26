import React from 'react';
import PropTypes from 'prop-types';
import TableCell from './table-cell';
import Button from '../button';
import { ArrowDownIcon } from '../../svg';

const TableColumn = ({ data, label }) => {
  const cells = data.map((cell, idx) => <TableCell key={idx}>{cell}</TableCell>);

  return (
    <div className="table-column">
      <div className="table-column__label">
        <Button variant="icon">
          {label}
          {' '}
          <ArrowDownIcon />
        </Button>
      </div>
      {cells}
    </div>
  );
};

TableColumn.propTypes = {
  data: PropTypes.array.isRequired,
  label: PropTypes.string,
};

TableColumn.defaultProps = {
  data: [],
  label: '',
};

export default TableColumn;
