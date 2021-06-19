import React from 'react'
import classNames from 'classnames'
import Button from '../button'

export interface TabBarNavProps {
	children: string;
	className: string;
	setActiveTab: (tab: string) => void;
}

const TabBarNav = ({ children, setActiveTab, className }: TabBarNavProps) => {
	const btnClass = classNames('tab-bar__nav__item', className)

	return (
		<Button variant="text" className={btnClass} onClick={() => setActiveTab(children)}>
			{children}
		</Button>
	)
}

export default TabBarNav
