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
}) => {
	const btnClass = classNames('btn', classname, size, variant, color, {
		largeFont: font === 'large',
	})

	const styles = {
		width,
	}

	return (
		<button className={btnClass} onClick={onClick} style={styles}>
			{children}
		</button>
	)
}

Button.defaultProps = {
	width: 'auto',
	classname: '',
	children: null,
	onClick() {},
	size: '',
	variant: '',
	color: '',
	font: '',
}

Button.propTypes = {
	width: PropTypes.string,
	classname: PropTypes.string,
	children: PropTypes.node,
	onClick: PropTypes.func,
	size: PropTypes.string,
	variant: PropTypes.string,
	color: PropTypes.string,
	font: PropTypes.string,
}

export default Button
