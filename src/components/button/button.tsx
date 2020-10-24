import React, { ReactNode } from 'react'
import PropTypes, { string } from 'prop-types'
import classNames from 'classnames'

interface ButtonProps {
	children?: ReactNode;
	onClick?: () => void;
	size?: 'large' | 'medium';
	font?: 'large' | 'medium';
	variant?: 'solid' | 'outlined' | 'icon' | 'text';
	color?: 'purple' | 'green' | 'red' | 'aqua';
	width?: number | string;
	className?: string;
	fullWidth?: boolean;
	type?: 'submit' | 'reset' | 'button';
}

const Button = ({
	children,
	onClick,
	size,
	font,
	variant,
	color,
	width,
	className,
	fullWidth,
	type,
	...otherProps
} : ButtonProps) => {
	const btnClass = classNames('btn', className, size, variant, color, {
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
	className: null,
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
	className: PropTypes.string,
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
