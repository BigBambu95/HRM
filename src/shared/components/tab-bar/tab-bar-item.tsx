import React from 'react'

export interface TabBarItemProps {
	children?: React.ReactNode;
	label: string;
}

const TabBarItem = ({ children }: TabBarItemProps) => <div className="tab-bar__item">{children}</div>

export default TabBarItem
