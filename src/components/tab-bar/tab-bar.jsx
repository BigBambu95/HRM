import React, { useState } from 'react'
import classNames from 'classnames'

import TabBarNav from './tab-bar-nav'
import TabBarItem from './tab-bar-item'

const TabBar = ({ children }) => {
	const getChildrenLabels = (cd) => {
		return cd.map(({ props }) => props.label)
	}

	const [activeTab, setActiveTab] = useState(getChildrenLabels(children)[0])

	const renderTabs = () => {
		return getChildrenLabels(children).map((navLabel) => (
			<TabBarNav
				key={navLabel}
				className={classNames({ active: activeTab === navLabel })}
				setActiveTab={setActiveTab}
			>
				{navLabel}
			</TabBarNav>
		))
	}

	return (
		<div className='tab-bar'>
			<div className='tab-bar__nav'>{renderTabs()}</div>
			{children}
		</div>
	)
}

export default TabBar

TabBar.Item = TabBarItem
