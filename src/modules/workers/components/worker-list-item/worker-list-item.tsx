import React from 'react'
import { Link, match as matchType } from 'react-router-dom'
import classnames from 'classnames'
import { Avatar, ContextMenu, Record } from 'components'
import { getDictionaryValueById } from 'helpers/dictionaries'
import { PencilIcon, RemoveBasketIcon } from 'svg'
import { BASE_URL } from 'services/api'

export interface WorkerListItemProps {
	worker: IWorker;
	addTab: ({ label, path, office, prevPage }: AddTabParams) => void;
	match: matchType<Record<'id', string>>;
}

const WorkerListItem: React.FC<PropsWithDictionaries<WorkerListItemProps>> = ({
	worker,
	addTab,
	match,
	departments,
	offices,
	professions,
}) => {
	const { id, name, department, phone, email, office, profession, avatar, status } = worker

	const className = classnames('worker-list__item', status, {
		active: match.params.id === id,
	})

	const officeName = getDictionaryValueById(offices, office)

	return (
		<div className={className}>
			<Link
				to={`/workers/${id}`}
				onClick={() => addTab({
					label: name,  path: `/workers/${id}`, office: officeName as string,  prevPage: 'Сотрудники' })}
			>
				<div className="worker-list__item__left">
					<Avatar src={`${BASE_URL}/images/${avatar}`} alt={name} className="worker-list__item__picture" />
					<div>
						<h3 className="worker-list__item__name">{name}</h3>
						<div className="worker-list__item__profession">{getDictionaryValueById(professions, profession)}</div>
					</div>
				</div>
				<div className="worker-list__item__right">
					<Record label="E-mail" field={email} />
					<Record label="Телефон" field={phone} />
					<Record label="Отдел" field={getDictionaryValueById(departments, department)} />
					<Record label="Офис" field={officeName} />
				</div>
			</Link>
			<ContextMenu>
				<ContextMenu.Item icon={<PencilIcon width={16} height={16} />}>Изменить</ContextMenu.Item>
				<ContextMenu.Item icon={<RemoveBasketIcon width={16} height={16} />}>Удалить</ContextMenu.Item>
			</ContextMenu>
		</div>
	)
}

export default WorkerListItem
