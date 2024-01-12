import React, { ReactNode } from 'react'
import { Grid, Row } from '@shared/components'
import { observer } from 'mobx-react-lite'
import CandidateListItem from '../candidate-list-item'

export interface CandidateListProps {
	candidates: Candidates;
	title: string;
	contextMenu: ReactNode;
}

const CandidateList: React.FC<CandidateListProps> = ({ candidates, contextMenu, title }) => {
	return (
		<div>
			<Row justify="space-between" style={{ marginBottom: '24px', marginRight: '6px' }}>
				<h4>{title}</h4>
				{contextMenu}
			</Row>
			<Grid columns={1} gap="2em">
				{candidates.map((candidate) => (
					<CandidateListItem key={candidate.id} candidate={candidate} />
				))}
			</Grid>
		</div>
	)
}

export default observer(CandidateList)
