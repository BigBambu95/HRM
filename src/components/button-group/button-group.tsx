import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

interface ButtonGroupProps {
	children?: ReactNode | ReactNode[];
	className?: string;
	vertical?: boolean;
}

const ButtonGroup = ({ children, className, vertical = false } : ButtonGroupProps) => {
	const classes = classNames('button-group', className, { vertical })

	return (
		<div className={classes}>
			{children}
		</div>
	)
}

export default ButtonGroup
