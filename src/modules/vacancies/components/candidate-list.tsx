import React from 'react'
import { Grid, Row, ContextMenu } from 'components'
import CandidateListItem from './candidate-list-item'
import { ArchiveIcon, VacancyIcon } from 'svg'

export interface CandidateListProps {
	items: Candidates;
	title: string;
	archiveAllItems?: (items: Candidates) => void;
}

const CandidateList: React.FC<CandidateListProps> = ({ items, archiveAllItems, title, ...otherProps }) => {
	if (items.length === 0) return null

	return (
		<div>
			<Row justify="space-between" style={{ marginBottom: '24px' }}>
				<h4>{title}</h4>
				<ContextMenu iconVariant="horizontal">
					<ContextMenu.Item
						icon={<ArchiveIcon width={16} height={16} />}
						onClick={() => archiveAllItems && archiveAllItems(items)}
					>
						Архивировать всех
					</ContextMenu.Item>
					<ContextMenu.Item
						icon={<VacancyIcon width={16} height={16} />}
						onClick={() => archiveAllItems && archiveAllItems(items)}
					>
						Добавить резюме
					</ContextMenu.Item>
				</ContextMenu>
			</Row>
			<Grid columns={1} gap="2em" style={{ marginTop: '2em' }}>
				{items.map((item) => (
					<CandidateListItem key={item._id} item={item} {...otherProps} />
				))}
			</Grid>
		</div>
	)
}

export default CandidateList
