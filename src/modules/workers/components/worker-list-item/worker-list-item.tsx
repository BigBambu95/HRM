import React from 'react'
import { Link } from 'react-router-dom'
import { Record, Typography } from 'components'
import { getDictionaryValueById } from 'helpers/dictionaries'

const WorkerListItem = ({
	item,
	addTab,
	match,
	departments,
	offices,
	professions,
}) => {
	const {
		_id,
		name,
		department,
		phone,
		email,
		office,
		profession,
		avatar,
		status,
	} = item

	const clazz =
		match.params.id === _id
			? `worker-list__item ${status} active`
			: `worker-list__item ${status}`

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
					<Record
						label='Отдел'
						field={getDictionaryValueById(departments, department)}
					/>
					<Record
						label='Офис'
						field={getDictionaryValueById(offices, office)}
					/>
				</div>
			</Link>
		</div>
	)
}

export default WorkerListItem
