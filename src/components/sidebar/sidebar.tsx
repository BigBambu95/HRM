import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'reducers'
import { addTab } from 'actions'
import SidebarLink from '../sidebar-link'

const Sidebar = ({ history, location }: ANY_MIGRATION_TYPE) => {
	const dispatch = useDispatch()
	const menu = useSelector((state) => state.menu.items)
	const activeTab = useSelector((state) => state.tabList.activeTab)

	useEffect(() => {
		history.push(activeTab.path)
	}, [activeTab.path])

	const mainMenu = menu.map((link) => {
		const isActive = location.pathname.includes(link.path)
		const className = isActive ? 'active' : ''

		return (
			<li className={className} key={link.id}>
				<SidebarLink
					path={link.path}
					icon={link.icon}
					addTab={(label, path) => dispatch(addTab({ label, path }))}
					subLinks={link.subLinks}
				>
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
}

export default withRouter(Sidebar)
