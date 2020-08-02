import React from 'react'
import classnames from 'classnames'

const Col = ({ children, style, size }) => {
	const className = classnames('col', size && `col-${size}`)

	return (
		<div className={className} style={style}>
			{children}
		</div>
	)
}

export default Col
