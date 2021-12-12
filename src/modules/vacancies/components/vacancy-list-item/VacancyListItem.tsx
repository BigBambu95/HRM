import React, { Key, ReactNode } from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { getDictionaryValueById } from '@helpers/dictionaries'

export interface VacancyListItemProps {
	vacancy: Vacancy;
	addTab: ({ label, path, office, prevPage }: AddTabParams) => void;
	offices: Offices;
	professions: Professions;
	renderContextMenu: (id: Key) => ReactNode;
}

const VacancyListItem = ({
	vacancy,
	addTab,
	offices,
	professions,
	renderContextMenu
}: VacancyListItemProps) => {
	const { id, profession, office, date } = vacancy

	return (
		<div className='vacancy-list__item'>
			<Link
				to={`/vacancies/${id}`}
				onClick={() => addTab({
					label: getDictionaryValueById(professions, profession) as string,
					path: `/vacancies/${id}`,
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
						{/* {quickly && <FireIcon />} */}
						<Moment format='DD.MM.YY'>{date}</Moment>
					</div>
				</div>
			</Link>
			{renderContextMenu(id)}
		</div>
	)
}

export default observer(VacancyListItem)
