import React, { useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { StoreContext } from '@store/StoreContext'
import menu from '../../menu'
import SidebarLink from '../sidebar-link'

const Sidebar = observer(({ history, location }: ANY_MIGRATION_TYPE) => {
	const {
		tabsStore: { activeTab, addTab },
	} = useContext(StoreContext)

	useEffect(() => {
		history.push(activeTab.path)
	}, [activeTab.path])

	const mainMenu = menu.map((link) => {
		const isActive = location.pathname.includes(link.path)
		const className = isActive ? 'active' : ''

		return (
			<li className={className} key={link.id}>
				<SidebarLink {...link} addTab={addTab}>
					{link.label}
				</SidebarLink>
			</li>
		)
	})

	return (
		<aside className="sidebar">
			<ul>{mainMenu}</ul>
		</aside>
	)
})

export default withRouter(Sidebar)
