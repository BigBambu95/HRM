import React from 'react'
import { Link, match } from 'react-router-dom'
import { Record, Typography } from 'components'
import { getDictionaryValueById } from 'helpers/dictionaries'

export interface WorkerListItemProps {
	worker: Worker;
	addTab: (label: string, path: string, office: string, prevPage?: string) => void;
	match: match<Record<'id', string>>;
}

const WorkerListItem: React.FC<PropsWithDictionaries<WorkerListItemProps>> = ({
	worker,
	addTab,
	match,
	departments,
	offices,
	professions,
}) => {
	const { _id, name, department, phone, email, office, profession, avatar, status } = worker

	const clazz =
		match.params.id === _id ? `worker-list__item ${status} active` : `worker-list__item ${status}`

	return (
		<div className={clazz}>
			<Link
				to={`/workers/${_id}`}
				onClick={() => addTab(name, `/workers/${_id}`, office, 'Сотрудники')}
			>
				<div className='worker-list__item__left'>
					<div className='worker-list__item__picture'>
						<img src={avatar} alt={name} />
					</div>
					<div>
						<h3 className='worker-list__item__name'>{name}</h3>
						<Typography.Text type='secondary'>
							{getDictionaryValueById(professions, profession)}
						</Typography.Text>
					</div>
				</div>
				<div className='worker-list__item__right'>
					<Record label='E-mail' field={email} />
					<Record label='Телефон' field={phone} />
					<Record label='Отдел' field={getDictionaryValueById(departments, department)} />
					<Record label='Офис' field={getDictionaryValueById(offices, office)} />
				</div>
			</Link>
		</div>
	)
}

export default WorkerListItem
