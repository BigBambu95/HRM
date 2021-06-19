import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useSelector } from '../../reducers'
import SidebarLink from '../sidebar-link'
import { addTab } from '../../actions'
import { RootState } from '../../reducers'

const Sidebar = ({ activeTab, history, location }: ANY_MIGRATION_TYPE) => {
	const menu = useSelector((state) => state.menu.items)

	useEffect(() => {
		// dispatch(hotVacanciesRequest())
	}, [])

	useEffect(() => {
		history.push(activeTab.path)
	}, [activeTab.path])

	// const getActiveMenuItem = () => menu.filter(item => location.pathname.includes(item.path))[0]

	const mainMenu = menu.map((link) => {
		const isActive = location.pathname.includes(link.path)
		const className = isActive ? 'active' : ''

		return (
			<li className={className} key={link.id}>
				<SidebarLink path={link.path} icon={link.icon} addTab={addTab} subLinks={link.subLinks}>
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

const mapStateToProps = (state: RootState) => {
	return {
		tabs: state.tabList.tabs,
		activeTab: state.tabList.activeTab,
		menu: state.menu.items,
	}
}

const mapDispatchToProps = (dispatch: ANY_MIGRATION_TYPE) => {
	return {
		addTab: (label: string, path: string) => {
			dispatch(
				addTab({
					label,
					path,
				})
			)
		},
	}
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Sidebar)
