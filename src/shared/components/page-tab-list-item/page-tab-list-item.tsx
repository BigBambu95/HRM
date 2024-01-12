import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { BackIcon, CloseIcon } from '@shared/components/icons'
import { observer } from 'mobx-react-lite'
import Button from '../button'

export interface PageTabListItemProps {
	tab: Tab;
	office: string;
	prevPage: string;
	removeTab: () => void;
	location: Location;
	history: History;
}

const PageTabListItem: React.FC<PageTabListItemProps> = observer(({ tab, removeTab, location, history }) => {
	const { label, prevPage, office, path } = tab

	const baseClassName = 'tab-list__item'
	const isActiveTab = location.pathname === tab.path

	const renderPrevPage = prevPage && isActiveTab && (
		<div className={`${baseClassName}__prev-page`}>
			{prevPage}
			/
		</div>
	)

	const renderOffice = office && isActiveTab && <div className={`${baseClassName}__office`}>{office}</div>

	const arrowBack = isActiveTab && prevPage && (
		<Button
			variant="icon"
			className={`${baseClassName}__back`}
			onClick={() => history.back()}>
			<BackIcon />
		</Button>
	)

	const classNames = classnames(baseClassName, {
		[`${baseClassName}-active`]: isActiveTab,
	})

	return (
		<li className={classNames}>
			{arrowBack}
			<div>
				{renderPrevPage}
				<div className="flex align-items-center">
					<Link to={path}>{label}</Link>
					<Button
						variant="icon"
						className="close-btn"
						onClick={removeTab}>
						<CloseIcon width={16} height={16} />
					</Button>
				</div>
				{renderOffice}
			</div>
		</li>
	)
})

export default PageTabListItem
