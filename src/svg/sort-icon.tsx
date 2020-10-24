import React from 'react';

const SortIcon = (fill = '#000', width = '24px', height = '24px') => (
  <svg width={width} height={height} viewBox="0 0 459 459">
    <path d="M0,382.5h153v-51H0V382.5z M0,76.5v51h459v-51H0z M0,255h306v-51H0V255z" fill={fill} />
  </svg>
);

export default SortIcon;
