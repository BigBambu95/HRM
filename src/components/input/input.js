import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({
  name, id, label, rightIcon, style
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState('');

  const clazz = isFocus ? 'input focused' : 'input';

  const removeFocus = () => {
    if (value.length === 0) {
      setIsFocus(false);
    }
  };

  return (
    <div className={clazz} style={style}>
      <input
        type="text"
        id={id}
        name={name}
        className="input__field"
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={removeFocus}
        onChange={(e) => setValue(e.target.value)}
      />
      <label className="input__label">{label}</label>
      <span className="input__right-icon">{rightIcon}</span>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  rightIcon: PropTypes.node,
};

Input.defaultProps = {
  name: '',
  id: '',
  label: '',
  rightIcon: null,
};

export default Input;
