import React, { ReactNode } from 'react'

interface TabBarItem {
	children?: ReactNode | ReactNode[];
	label?: string;
}

const TabBarItem = ({ children, label }: TabBarItem) => (
	<div className='tab-bar__item'>{children}</div>
)

export default TabBarItem
