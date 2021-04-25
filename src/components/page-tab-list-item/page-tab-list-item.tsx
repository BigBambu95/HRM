import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import Button from '../button'
import { BackIcon, CloseIcon } from 'svg'

export interface PageTabListItemProps {
	tab: Tab;
	office: string;
	prevPage: string;
	removeTab: () => void;
	location: Location;
	history: History;
}

const PageTabListItem: React.FC<PageTabListItemProps> = ({
	tab,
	office,
	prevPage,
	removeTab,
	location,
	history,
}) => {
	const renderPrevPage = prevPage ? (
		<div className='tab-list__item__prev-page'>{prevPage}/</div>
	) : null

	const renderOffice = office ? <div className='tab-list__item__office'>{office}</div> : null

	const arrowBack =
		office || prevPage ? (
			<Button variant='icon' className='tab-list__item__back' onClick={() => history.back()}>
				<BackIcon />
			</Button>
		) : null

	const styles = prevPage || office ? { padding: '.35em .5em' } : {}

	const classNames = classnames(
		location.pathname === tab.path ? 'tab-list__item active' : 'tab-list__item'
	)

	return (
		<li className={classNames} style={styles}>
			{arrowBack}
			<div>
				{renderPrevPage}
				<div className='flex align-items-center'>
					<Link to={tab.path}>{tab.label}</Link>
					<Button variant='icon' className='close-btn' onClick={removeTab}>
						<CloseIcon width={16} height={16} />
					</Button>
				</div>
				{renderOffice}
			</div>
		</li>
	)
}

export default PageTabListItem
