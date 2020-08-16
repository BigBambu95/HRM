import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = ({
	children,
	onClick,
	size,
	font,
	variant,
	color,
	width,
	classname,
	fullWidth,
	type,
	...otherProps
}) => {
	const btnClass = classNames('btn', classname, size, variant, color, {
		largeFont: font === 'large',
		fullWidth,
	})

	return (
		<button className={btnClass} onClick={onClick} type={type} {...otherProps}>
			{children}
		</button>
	)
}

Button.defaultProps = {
	classname: '',
	children: null,
	onClick: () => {},
	size: 'medium',
	variant: 'outlined',
	color: 'purple',
	font: 'medium',
	fullWidth: false,
	type: 'button',
}

Button.propTypes = {
	classname: PropTypes.string,
	children: PropTypes.node,
	onClick: PropTypes.func,
	size: PropTypes.oneOf(['large', 'medium']),
	variant: PropTypes.oneOf(['solid', 'outlined', 'icon', 'text']),
	color: PropTypes.oneOf(['purple', 'green', 'red', 'aqua']),
	font: PropTypes.oneOf(['large', 'medium']),
	fullWidth: PropTypes.bool,
	type: PropTypes.oneOf(['submit', 'reset', 'button']),
}

export default Button
