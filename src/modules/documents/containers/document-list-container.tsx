import React, { useContext, useEffect } from 'react'
import Moment from 'react-moment'
import {
	Spinner, ContextMenu, FilterList,
	Button, Row, ErrorIndicator, Table, ToolBar
} from '@components'
import { DownloadIcon, PrinterIcon } from '@svg'
import type { ColumnsType } from '@components/table'
import { StoreContext } from '@store/StoreContext'

const DocumentListContainer = () => {
	const { documentsStore: {
		state, fetchDocuments, removeDocument, documents
	}} = useContext(StoreContext)

	useEffect(() => {
		fetchDocuments({})
	}, [])

	const columns: ColumnsType = [
		{
			key: 'name',
			title: 'Название',
			dataIndex: 'name',
		},
		{
			key: 'date',
			title: 'Дата',
			dataIndex: 'date',
			render: (date) => <Moment format="DD.MM.YY">{date}</Moment>,
		},
		{
			key: 'download',
			title: '',
			dataIndex: 'download',
			render: (file) => {
				return (
					<Row justify="end" gutter={[24, 0]}>
						<a href={`http://localhost:8080/${file?.id}.${file?.ext}`}>
							<PrinterIcon />
						</a>
						<a href={`http://localhost:8080/${file?.id}.${file?.ext}`} target="_blank" rel="noreferrer" download>
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

	if (state === 'pending') return <Spinner />

	if (state === 'error') return <ErrorIndicator />

	return (
		<>
			<ToolBar>
				<FilterList>
					{/* <Filter items={[]} onChange={() => {}} defaultValue="Все" /> */}
				</FilterList>
				<Button>Добавить документ</Button>
			</ToolBar>
			<Table data={documents} columns={columns} />
		</>
	)
}

export default DocumentListContainer
