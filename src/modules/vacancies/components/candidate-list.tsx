import React from 'react'
import { Grid, Row, ContextMenu } from '@components'
import { ArchiveIcon, VacancyIcon } from '@svg'
import { observer } from 'mobx-react-lite'
import CandidateListItem from './candidate-list-item'

export interface CandidateListProps {
	candidates: Candidates;
	title: string;
	archiveAllItems?: (items: Candidates) => void;
}

const CandidateList: React.FC<CandidateListProps> = ({ candidates, archiveAllItems, title }) => {
	if (candidates.length === 0) return null

	return (
		<div>
			<Row justify="space-between" style={{ marginBottom: '24px' }}>
				<h4>{title}</h4>
				<ContextMenu iconVariant="horizontal">
					<ContextMenu.Item
						icon={<ArchiveIcon width={16} height={16} />}
						onClick={() => archiveAllItems && archiveAllItems(candidates)}
					>
						Архивировать всех
					</ContextMenu.Item>
					<ContextMenu.Item
						icon={<VacancyIcon width={16} height={16} />}
						onClick={() => archiveAllItems && archiveAllItems(candidates)}
					>
						Добавить резюме
					</ContextMenu.Item>
				</ContextMenu>
			</Row>
			<Grid columns={1} gap="2em" style={{ marginTop: '2em' }}>
				{candidates.map((candidate) => (
					<CandidateListItem key={candidate.id} candidate={candidate} />
				))}
			</Grid>
		</div>
	)
}

export default observer(CandidateList)
