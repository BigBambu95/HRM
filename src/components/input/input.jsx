import React from 'react'
import PropTypes from 'prop-types'

const Input = React.forwardRef(({ name, rightIcon, style }, ref) => {
	return (
		<div className='input' style={style}>
			<input ref={ref} type='text' name={name} className='input__field' />
			<span className='input__right-icon'>{rightIcon}</span>
		</div>
	)
})

Input.displayName = 'Input'

Input.propTypes = {
	name: PropTypes.string.isRequired,
	rightIcon: PropTypes.node,
}

Input.defaultProps = {
	rightIcon: null,
}

export default Input
