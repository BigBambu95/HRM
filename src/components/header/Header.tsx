import React from 'react'
import { compose } from 'redux'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { removeTab } from 'actions'

import { BellIcon, ChatIcon, SearchIcon } from 'svg'
import Logo from './logo'
import MenuIcon from './menu'

import PageTabList from '../page-tab-list'

const Header = (props) => (
	<header className='header'>
		<div style={{ display: 'flex' }}>
			<MenuIcon />
			<Link to='/' className='header__logo'>
				<Logo />
			</Link>
		</div>
		<div className='header__tabs'>
			<PageTabList {...props} />
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
				<div className='header__user__picture'>
					<img
						src='https://s3-alpha-sig.figma.com/img/74d9/804b/6cb4508289628db2ef7db77876771e8f?Expires=1562544000&Signature=L1RMyvQzIS2AiQcXg1MtpCjPxLbSxuuh7ywzjBPyaTUvO4Rt8-2kDiYKKiE88D9QGqxP13vKQoGPcB9AslBKw1iidqmBypUedeJCtbHIUH4xAbjSZS04CVuVrKQXTZ30Mynf654S7ktsx2Vb3JbmTJaQDkON1tZ2RQuii3K4l0YWe8IUfSOXrvEqGxSSQ2AzQw0aYNUlVNkXrYn~QX7nXB2OqB2WwYcBJGfar8KJfiEJxKKQdjt9MmKL~GffP-xM0xTqvsranYMuGINVxa190GCLgs51dSzjsYXUkShfM1aatp8BV9yK1x1VvN0Nk~41xgnyEMFd1jFfR77aot5IQA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
						alt=''
					/>
				</div>
				<div className='header__user__description'>
					<h3 className='title'>Василий Акзаров</h3>
					<div className='subtitle'>Руководитель отдела кадров</div>
				</div>
			</div>
		</div>
	</header>
)

const mapStateToProps = ({ tabList }) => ({
	tabs: tabList.tabs,
	activeTab: tabList.activeTab,
})

const mapDispatchToProps = (dispatch) => ({
	removeTab: (id) => dispatch(removeTab(id)),
})

export default compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps)
)(Header)as any
