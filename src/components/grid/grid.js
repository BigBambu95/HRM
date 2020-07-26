import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({
  columns, columnWidth, gap, children,
}) => {
  const styles = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, ${columnWidth})`,
    gridGap: gap,
  };

  return (
    <div style={styles}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  columns: PropTypes.number,
  children: PropTypes.node,
};

Grid.defaultProps = {
  columns: 1,
  children: null,
  columnWidth: '1fr',
  gap: '1em',
};

export default Grid;
