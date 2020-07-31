import React from 'react'
import { Grid, Row, ContextMenu } from 'components'
import CandidateListItem from './candidate-list-item'
import {
	ArchiveIcon,
	VacancyIcon,
} from '../../../svg'

const CandidateList = (props) => {
	const { items, archiveAllItems, title } = props

	if (items.length === 0) {
		return null
	}

	return (
  <div>
    <Row justify="space-between" gutter={[0, 16]}>
      <h4>{title}</h4>
      <ContextMenu iconVariant="horizontal">
        <ContextMenu.Item
          icon={<ArchiveIcon width={16} height={16} />}
          handleClick={() => archiveAllItems(items)}
        >
          Архивировать всех
        </ContextMenu.Item>
        <ContextMenu.Item
          icon={<VacancyIcon width={16} height={16} />}
          handleClick={() => archiveAllItems(items)}
        >
          Добавить резюме
        </ContextMenu.Item>
      </ContextMenu>
    </Row>
    <Grid columns={1} gap="2em" style={{ marginTop: '2em' }}>
      {items.map((item) => (
        <CandidateListItem key={item.id} item={item} {...props} />
				))}
    </Grid>
  </div>
	)
}

export default CandidateList