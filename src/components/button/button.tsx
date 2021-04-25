import React, { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: 'large' | 'medium';
	variant?: 'solid' | 'outlined' | 'icon' | 'text';
	color?: 'purple' | 'green' | 'red' | 'aqua';
	font?: 'large' | 'medium';
	fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	children,
	size = 'medium',
	font = 'medium',
	variant = 'outlined',
	color = 'purple',
	className,
	fullWidth,
	...otherProps
}) => {
	const btnClass = classNames('btn', className, size, variant, color, {
		largeFont: font === 'large',
		fullWidth,
	})

	return (
		<button className={btnClass} {...otherProps}>
			{children}
		</button>
	)
}

export default Button
