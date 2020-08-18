import React from 'react'
import classnames from 'classnames'

const Title = () => {}

const Text = ({ type, className, children }) => {
	const textClasses = classnames('text', className, {
		[`text_${type}`]: type,
	})
	return <span className={textClasses}>{children}</span>
}

const Typography = () => {}

export default Typography

Typography.Title = Title
Typography.Text = Text
