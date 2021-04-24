import React, { Fragment } from 'react'
import PageTabListItem from '../page-tab-list-item'

export interface PageTabListProps {
	tabs: Array<Tab>;
	office: string;
	removeTab: (key: React.Key) => void;
	location: Location;
	history: History;
	prevPage: string;
}

const PageTabList: React.FC<PageTabListProps> = ({ tabs, removeTab, ...otherProps }) => {
	const tabList = tabs.map((tab, idx) => (
		<Fragment key={idx}>
			<PageTabListItem {...otherProps} tab={tab} removeTab={() => removeTab(idx)} />
		</Fragment>
	))

	return <ul className='page-tab-list'>{tabList}</ul>
}

export default PageTabList
