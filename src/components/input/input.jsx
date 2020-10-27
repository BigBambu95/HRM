import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Input = React.forwardRef(({ 
	name, rightIcon, 
	style, className, placeholder, ...props 
}, ref) => {
	const classes = classnames('input', className)

	return (
		<div className={classes} style={style}>
			<input
				type='text'
				{...props}
				ref={ref}
				name={name}
				className='input__field'
				required
			/>
			{placeholder && <span className="input__placeholder">{placeholder}</span>}
			{rightIcon && <span className='input__right-icon'>{rightIcon}</span>}
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
