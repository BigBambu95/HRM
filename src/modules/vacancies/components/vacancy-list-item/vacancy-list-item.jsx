import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

import { ContextMenu } from 'components'
import { FireIcon, PencilIcon, RemoveBasketIcon } from 'svg'

const VacancyListItem = ({ item, deleteItem, addTab }) => {
	const { _id, profession, url, office, date, quickly = false } = item

	return (
		<div className='vacancy-list__item'>
			<Link
				to={`/vacancies/${_id}`}
				onClick={() =>
					addTab(profession, `/vacancies/${url}`, office, 'Вакансии')
				}
			>
				<div className='vacancy-list__item__description'>
					<div className='vacancy-list__item__city'>{office}</div>
					<h3 className='vacancy-list__item__title'>{profession}</h3>
				</div>
				<div className='vacancy-list__item__right'>
					<div className='label'>Крайний срок до:</div>
					<div className='vacancy-list__item__date'>
						{quickly && <FireIcon />}
						<Moment format='DD.MM.YY'>{date}</Moment>
					</div>
				</div>
			</Link>
			<ContextMenu>
				<ContextMenu.Item icon={<PencilIcon width={16} height={16} />}>
					Изменить
				</ContextMenu.Item>
				<ContextMenu.Item
					onClick={() => deleteItem(_id)}
					icon={<RemoveBasketIcon width={16} height={16} />}
				>
					Удалить
				</ContextMenu.Item>
			</ContextMenu>
		</div>
	)
}

export default VacancyListItem
