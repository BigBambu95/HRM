import { observer } from 'mobx-react-lite'
import React, { Fragment, useContext } from 'react'
import { StoreContext } from '@app/store/StoreContext'
import PageTabListItem from '../page-tab-list-item'

export interface PageTabListProps {
	tabs: Array<Tab>;
	office: string;
	removeTab: (key: React.Key) => void;
	location: Location;
	history: History;
	prevPage: string;
}

const PageTabList: React.FC<PageTabListProps> = (props) => {
	const {
		tabsStore: { tabs, removeTab },
	} = useContext(StoreContext)

	const tabList = tabs.map((tab, idx) => (
		<Fragment key={tab.label}>
			<PageTabListItem
				{...props}
				tab={tab}
				removeTab={() => removeTab(idx)} />
		</Fragment>
	))

	return <ul className="page-tab-list">{tabList}</ul>
}

export default observer(PageTabList)
