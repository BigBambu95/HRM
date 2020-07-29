import React from 'react'
import PropTypes from 'prop-types'

const Input = React.forwardRef(({ name, id, label, rightIcon, style }, ref) => {
	return (
  <div className="input" style={style}>
    <label className="input__label" htmlFor={id}>
      {label}
    </label>
    <input ref={ref} type="text" id={id} name={name} className="input__field" />
    <span className="input__right-icon">{rightIcon}</span>
  </div>
	)
})

Input.displayName = 'Input'

Input.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string,
	label: PropTypes.string.isRequired,
	rightIcon: PropTypes.node,
}

Input.defaultProps = {
	id: '',
	rightIcon: null,
}

export default Input
