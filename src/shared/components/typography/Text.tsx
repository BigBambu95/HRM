import React, { HTMLAttributes } from 'react'
import classnames from 'classnames'

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
	type?: 'secondary';
	color?: 'purple';
}

const Text: React.FC<TextProps> = ({ type, className, children, color, ...otherProps }) => {
	const textClasses = classnames('text', className, {
		[`text_${type}`]: type,
		[`text_${color}`]: color,
	})
	return (
		<span className={textClasses} {...otherProps}>
			{children}
		</span>
	)
}

export default Text
