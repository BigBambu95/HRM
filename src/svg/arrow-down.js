import React from 'react';

const ArrowDown = ({ fill = '#000' }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={fill}>
    <path fillRule="evenodd" clipRule="evenodd" d="M5.06787 8.06594C5.11219 8.02295 5.17002 8.00097 5.22814 8.00003C5.23074 7.99999 5.23335 7.99999 5.23595 8.00003C5.29398 8.00097 5.35172 8.02288 5.39603 8.06576L5.7984 8.4552L12 14.4574L18.2016 8.45519L18.604 8.06576C18.6493 8.02186 18.7088 7.99994 18.7682 8C18.8276 8.00006 18.8869 8.02204 18.9321 8.06594C19.0227 8.1538 19.0226 8.29616 18.9319 8.38392L12.164 14.9342C12.0734 15.0219 11.9266 15.0219 11.836 14.9342L5.06806 8.38392C4.97739 8.29616 4.9773 8.1538 5.06787 8.06594Z" fill={fill} />
    <path d="M18.604 8.06576C18.6493 8.02186 18.7088 7.99994 18.7682 8L5.23595 8.00003C5.29398 8.00097 5.35172 8.02288 5.39603 8.06576L5.7984 8.4552L18.2016 8.45519L18.604 8.06576Z" fill={fill} />
  </svg>

);

export default ArrowDown;
