import React from 'react'
import { Link } from 'react-router-dom'
import Record from '../record'

const WorkerListItem = ({ item, addTab, match }) => {
	const {
		id,
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
		parseFloat(match.params.id) === id
			? `worker-list__item ${status} active`
			: `worker-list__item ${status}`

	return (
		<div className={clazz}>
			<Link
				to={`/workers/${id}`}
				onClick={() => addTab(name, `/workers/${id}`, office, 'Сотрудники')}
			>
				<div className='worker-list__item__left'>
					<div className='worker-list__item__picture'>
						<img src={avatar} alt={name} />
					</div>
					<div>
						<h3 className='worker-list__item__name'>{name}</h3>
						<div className='worker-list__item__profession'>{profession}</div>
					</div>
				</div>
				<div className='worker-list__item__right'>
					<Record label='E-mail' field={email} />
					<Record label='Телефон' field={phone} />
					<Record label='Отдел' field={department} />
					<Record label='Офис' field={office} />
				</div>
			</Link>
		</div>
	)
}

export default WorkerListItem
