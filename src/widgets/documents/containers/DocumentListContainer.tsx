import React, { useContext, useEffect } from 'react'
import Moment from 'react-moment'
import { observer } from 'mobx-react-lite'
import {
	ContextMenu, FilterList,
	Button, Row, Table, ToolBar, Filter, ItemTable
} from '@shared/components'
import { DownloadIcon, PrinterIcon } from '@shared/components/icons'
import type { ColumnType } from '@shared/components/table'
import { StoreContext } from '@app/store/StoreContext'
import { autorun } from 'mobx'

const DocumentListContainer = () => {
	const { documentsStore: {
		state, fetchDocuments, removeDocument, documents
	}} = useContext(StoreContext)


	useEffect(() => {
		autorun(() =>	fetchDocuments({}))
	}, [])

	const columns: ColumnType<IDocument>[] = [
		{
			key: 'name',
			title: 'Название',
			dataIndex: 'name',
		},
		{
			key: 'date',
			title: 'Дата',
			dataIndex: 'date',
			render: ({ date }) => <Moment format="DD.MM.YY">{date}</Moment>,
		},
		{
			key: 'download',
			title: '',
			dataIndex: 'file',
			render: ({ file }) => {
				return (
					<Row justify="end" gutter={[24, 0]}>
						<a href={`http://localhost:8080/${file?.id}.${file?.ext}`}>
							<PrinterIcon />
						</a>
						<a
							href={`http://localhost:8080/${file?.id}.${file?.ext}`}
							target="_blank"
							rel="noreferrer"
							download>
							<DownloadIcon />
						</a>
						<ContextMenu>
							<ContextMenu.Item onClick={() => removeDocument(file.id)}>Удалить</ContextMenu.Item>
						</ContextMenu>
					</Row>
				)
			},
		},
	]
	
	return (
		<ItemTable
			// state={state}
			items={documents}
			render={<Table data={documents} columns={columns} />}
			header={
				<ToolBar>
					<FilterList>
						<Filter items={[]} />
					</FilterList>
					<Button onClick={() => null}>Добавить документ</Button>
				</ToolBar>
			}
		/>
	)
}

export default observer(DocumentListContainer)
