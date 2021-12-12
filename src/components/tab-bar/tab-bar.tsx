import React, { useState } from 'react'
import classNames from 'classnames'

import TabBarNav from './tab-bar-nav'
import TabBarItem, { TabBarItemProps } from './tab-bar-item'

type ChildrenType = React.ReactElement<TabBarItemProps>[]

export interface TabBarProps {
	children: ChildrenType;
}

const TabBar = ({ children }: TabBarProps) => {
	const getChildrenLabels = (children: ChildrenType): Array<string> => {
		return children.map(({ props }) => props.label)
	}

	const [activeTab, setActiveTab] = useState(getChildrenLabels(children)[0])

	const renderTabs = () => {
		return getChildrenLabels(children).map((navLabel) => (
			<TabBarNav
				key={navLabel}
				className={classNames({ active: activeTab === navLabel })}
				setActiveTab={setActiveTab}>
				{navLabel}
			</TabBarNav>
		))
	}

	return (
		<div className="tab-bar">
			<div className="tab-bar__nav">{renderTabs()}</div>
			{children}
		</div>
	)
}

export default TabBar

TabBar.Item = TabBarItem
