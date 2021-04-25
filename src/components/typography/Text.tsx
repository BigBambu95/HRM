import React, { HTMLAttributes } from 'react'
import classnames from 'classnames'

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
	type?: string;
}

const Text: React.FC<TextProps> = ({ type, className, children, ...otherProps }) => {
	const textClasses = classnames('text', className, {
		[`text_${type}`]: type,
	})
	return (
		<span className={textClasses} {...otherProps}>
			{children}
		</span>
	)
}

export default Text
