import React, { ReactNode } from 'react'
import classnames from 'classnames'

const Title = () => {}

interface TextProps {
	type?: string;
	className?: string;
	children?: ReactNode | ReactNode[]

}

const Text = ({ type, className, children }: TextProps) => {
	const textClasses = classnames('text', className, {
		[`text_${type}`]: type,
	})
	return <span className={textClasses}>{children}</span>
}

const Typography = () => {}

export default Typography

Typography.Title = Title
Typography.Text = Text
