import React from 'react'
import classNames from 'classnames'

import Button from '../button'

const TabBarNav = ({ children, setActiveTab, className }) => {
	const btnClass = classNames('tab-bar__nav__item', className)

	return (
		<Button variant='text' classname={btnClass} onClick={() => setActiveTab(children)}>
			{children}
		</Button>
	)
}

export default TabBarNav
