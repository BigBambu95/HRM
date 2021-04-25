import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

import { ContextMenu } from 'components'
import { FireIcon, PencilIcon, RemoveBasketIcon } from 'svg'
import { getDictionaryValueById } from 'helpers/dictionaries'

export interface VacancyListItemProps {
	item: Vacancy;
	deleteItem: (id: React.Key) => void;
	addTab: ANY_MIGRATION_TYPE;
	offices: ANY_MIGRATION_TYPE;
	professions: ANY_MIGRATION_TYPE;
}

const VacancyListItem: React.FC<VacancyListItemProps> = ({
	item,
	deleteItem,
	addTab,
	offices,
	professions,
}) => {
	const { _id, profession, url, office, date, quickly = false } = item

	return (
		<div className='vacancy-list__item'>
			<Link
				to={`/vacancies/${_id}`}
				onClick={() => addTab(profession, `/vacancies/${url}`, office, 'Вакансии')}
			>
				<div className='vacancy-list__item__description'>
					<div className='vacancy-list__item__city'>{getDictionaryValueById(offices, office)}</div>
					<h3 className='vacancy-list__item__title'>
						{getDictionaryValueById(professions, profession)}
					</h3>
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
				<ContextMenu.Item icon={<PencilIcon width={16} height={16} />}>Изменить</ContextMenu.Item>
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
