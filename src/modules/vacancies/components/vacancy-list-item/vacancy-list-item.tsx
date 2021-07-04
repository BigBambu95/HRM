import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

import { ContextMenu } from '@components'
import { FireIcon, PencilIcon, RemoveBasketIcon } from '@svg'
import { getDictionaryValueById } from '@helpers/dictionaries'
import { observer } from 'mobx-react-lite'

export interface VacancyListItemProps {
	vacancy: Vacancy;
	removeVacancy: (id: React.Key) => void;
	addTab: ({ label, path, office, prevPage }: AddTabParams) => void;
	offices: Offices;
	professions: Professions;
}

const VacancyListItem: React.FC<VacancyListItemProps> = ({
	vacancy,
	removeVacancy,
	addTab,
	offices,
	professions,
}) => {
	const { id, profession, url, office, date, quickly = false } = vacancy

	return (
		<div className='vacancy-list__item'>
			<Link
				to={`/vacancies/${id}`}
				onClick={() => addTab({
					label: getDictionaryValueById(professions, profession) as string,
					path: `/vacancies/${url}`,
					office: getDictionaryValueById(offices, office) as string,
					prevPage: 'Вакансии'
				})}
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
					onClick={() => removeVacancy(id)}
					icon={<RemoveBasketIcon width={16} height={16} />}
				>
					Удалить
				</ContextMenu.Item>
			</ContextMenu>
		</div>
	)
}

export default observer(VacancyListItem)
