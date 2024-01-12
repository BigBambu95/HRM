import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDownIcon } from '../icons'
import Button from '../button'

// TODO: Вынести компонент в отдельную папку
export interface SubMenuListProps {
	items: ANY_MIGRATION_TYPE;
	path: string;
	isShow: boolean;
}

const SubMenuList = ({ items, path, isShow }: SubMenuListProps) => {
	const links = items.map((item: ANY_MIGRATION_TYPE) => {
		const { id, profession, url } = item

		return (
			<li key={id} className="sub-menu__item">
				<Link to={`${path}${url}`}>{profession}</Link>
			</li>
		)
	})

	const classNames = isShow ? 'sub-menu active' : 'sub-menu'

	return <ul className={classNames}>{links}</ul>
}

export interface SidebarLinkProps {
	children: string;
	path: string;
	addTab: ({ label, path }: Record<'label' | 'path', string>) => void;
	subLinks: ANY_MIGRATION_TYPE;
	icon: ANY_MIGRATION_TYPE;
}

const SidebarLink = ({ icon, path, children, addTab, subLinks }: SidebarLinkProps) => {
	const [isShowSubMenu, showSubMenu] = useState(false)

	const arrow = subLinks.length > 0 && <ArrowDownIcon />
	const subMenu = subLinks.length > 0 && <SubMenuList
		items={subLinks}
		path={path}
		isShow={isShowSubMenu} />

	const arrowClassNames = isShowSubMenu ? 'arrow-btn active' : 'arrow-btn'

	return (
		<>
			<div className="sidebar__link">
				<Link to={path} onClick={() => addTab({ label: children, path })}>
					<span>
						<span className="sidebar__link__icon">{icon}</span>
						{children}
					</span>
				</Link>
				<Button
					onClick={() => showSubMenu(!isShowSubMenu)}
					className={arrowClassNames}
					variant="icon">
					{arrow}
				</Button>
			</div>
			{subMenu}
		</>
	)
}

SidebarLink.defaultProps = {
	subLinks: [],
}

export default observer(SidebarLink)
