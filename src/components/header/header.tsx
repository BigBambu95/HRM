import React, { Key } from 'react'
import { compose } from 'redux'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeTab } from 'actions'
import { BellIcon, ChatIcon, SearchIcon, LogoIcon, MenuIcon } from 'svg'
import { BASE_URL } from 'services/api'
import { RootState } from 'reducers'
import PageTabList from '../page-tab-list'
import Avatar from '../avatar'

export interface HeaderProps {
	tabs: Tabs;
	removeTab: (key: Key) => void;
	activeTab: Tab;
	location: Location;
	history: History;
}

const Header: React.FC<HeaderProps> = (props) => (
	<header className='header'>
		<div className="flex">
			<MenuIcon fill="#CC00FF" />
			<Link to='/' className='header__logo'>
				<LogoIcon />
			</Link>
		</div>
		<div className='header__tabs'>
			<PageTabList {...props as ANY_MIGRATION_TYPE} />
		</div>
		<div className='header__right'>
			<div className='toolbar'>
				<button className=''>
					<SearchIcon />
				</button>
				<button>
					<ChatIcon />
				</button>
				<button>
					<BellIcon />
				</button>
			</div>
			<div className='header__user'>
				<Avatar src={`${BASE_URL}/images/TJ9tAywL4lo.jpg`} />
				<div className='header__user__description'>
					<h3 className='title'>Василий Акзаров</h3>
					<div className='subtitle'>Руководитель отдела кадров</div>
				</div>
			</div>
		</div>
	</header>
)

const mapStateToProps = ({ tabList }: RootState) => ({
	tabs: tabList.tabs,
	activeTab: tabList.activeTab,
})

const mapDispatchToProps = (dispatch: ANY_MIGRATION_TYPE) => ({
	removeTab: (id: Key) => dispatch(removeTab(id)),
})

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Header)
