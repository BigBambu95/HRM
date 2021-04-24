import React, { HTMLAttributes } from 'react'
import classnames from 'classnames'

export interface ColProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * @property min: 1, max: 24
	 */
	size?: number;
}

const Col: React.FC<ColProps> = ({ children, style, size, className, ...otherProps }) => {
	const classNames = classnames(className, 'col', size && `col-${size}`)

	return (
		<div className={classNames} style={style} {...otherProps}>
			{children}
		</div>
	)
}

export default Col
