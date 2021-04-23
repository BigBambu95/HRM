import React, { HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
	vertical?: boolean;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, className, vertical, ...otherProps }) => {
	const classes = classNames('button-group', className, { vertical })

	return (
		<div className={classes} {...otherProps}>
			{children}
		</div>
	)
}

export default ButtonGroup
