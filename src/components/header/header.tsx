import React, { Key } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { BellIcon, ChatIcon, SearchIcon, LogoIcon, MenuIcon } from '@svg'
import { BASE_URL } from '@services/api'
import PageTabList from '../page-tab-list'
import Avatar from '../avatar'

export interface HeaderProps {
	tabs: Tabs;
	removeTab: (key: Key) => void;
	activeTab: Tab;
	location: Location;
	history: History;
}

const Header = (props: HeaderProps) => {
	return(
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
	)}

Header.displayName = "Header"

export default withRouter(Header as ANY_MIGRATION_TYPE)
