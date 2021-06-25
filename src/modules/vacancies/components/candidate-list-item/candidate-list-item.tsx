import React from 'react'
import { ArchiveIcon, PencilIcon } from 'svg'
import { ContextMenu, Record } from 'components'

export interface CandidateListItemProps {
	candidate: Candidate;
	editItem?: ANY_MIGRATION_TYPE;
	archiveItem?: ANY_MIGRATION_TYPE;
}

const CandidateListItem: React.FC<CandidateListItemProps> = ({ candidate, editItem, archiveItem }) => {
	const { name, avatar, age, exp, desiredSalary } = candidate

	return (
		<div className="candidate-list__item">
			<div className="candidate-list__item__picture">
				<img src={avatar} alt={name} className="responsive-img" />
			</div>
			<div className="candidate-list__item__description">
				<h3>{name}</h3>
				<Record label="Возраст" field={age} />
				<Record label="Опыт" field={exp} />
				<Record label="Желаемая з/п" field={desiredSalary} />
			</div>
			<ContextMenu>
				<ContextMenu.Item icon={<PencilIcon width={16} height={16} />} onClick={() => editItem(candidate)}>
					Изменить
				</ContextMenu.Item>
				<ContextMenu.Item icon={<ArchiveIcon width={16} height={16} />} onClick={() => archiveItem(candidate)}>
					Архивировать
				</ContextMenu.Item>
			</ContextMenu>
		</div>
	)
}

export default CandidateListItem
