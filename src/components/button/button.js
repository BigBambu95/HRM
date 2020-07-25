import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
    children, clickHandler, size, font, variant, color, width, classname
}) => {

   const btnClass = classNames(
       'btn',
       classname,
       size,
       variant,
       color,
       {largeFont: font === 'large'},
);

    const styles = {
        width
    };

    return(
        <button className={btnClass} onClick={clickHandler} style={styles}>
            {children}
        </button>
    )
};

Button.defaultProps = {
  children: null,
  clickHandler: function() {},
  size: '',
  variant: '',
  color: '',
  font: ''
};

Button.propTypes = {
  children: PropTypes.node,
  clickHandler: PropTypes.func,
  size: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  font: PropTypes.string
};

export default Button;