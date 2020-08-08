import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { connect, useSelector } from 'react-redux'
import { withHRMService } from '../hoc'
import SidebarLink from '../sidebar-link'
import { addTab } from '../../actions'

const Sidebar = ({ activeTab, history, location }) => {
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
				<SidebarLink
					path={link.path}
					icon={link.icon}
					addTab={addTab}
					subLinks={link.subLinks}
				>
					{link.label}
				</SidebarLink>
			</li>
		)
	})

	return (
		<aside className='sidebar'>
			<ul>{mainMenu}</ul>
		</aside>
	)
}

const mapStateToProps = (state) => {
	return {
		tabs: state.tabList.tabs,
		activeTab: state.tabList.activeTab,
		menu: state.menu.items,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTab: (label, path) => {
			dispatch(
				addTab({
					label,
					path,
				})
			)
		},
	}
}

export default compose(
	withRouter,
	withHRMService(),
	connect(mapStateToProps, mapDispatchToProps)
)(Sidebar)
