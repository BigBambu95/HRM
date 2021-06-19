import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Spinner, ContextMenu, FilterList, Filter, Button, Row, ErrorIndicator } from 'components'
import { Table } from 'components/table'
import { DownloadIcon, PrinterIcon } from 'svg'
import Moment from 'react-moment'
import { ToolBar } from 'components/tool-bar'
import actions from '../actions'
import { useSelector } from 'reducers'
import type { ColumnsType } from 'components/table'

const DocumentListContainer = () => {
	const dispatch = useDispatch()
	const documents = useSelector((state) => state.documentList.documents)
	const error = useSelector((state) => state.documentList.error)
	const loading = useSelector((state) => state.documentList.loading)

	useEffect(() => {
		dispatch(actions.fetchDocumentsRequest())
	}, [])

	const columns: ColumnsType = [
		{
			key: 'name',
			title: 'Название',
			dataIndex: 0,
		},
		{
			key: 'date',
			title: 'Дата',
			dataIndex: 1,
			render: (date) => <Moment format="DD.MM.YY">{date}</Moment>,
		},
		{
			key: 'download',
			title: '',
			dataIndex: 3,
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
							<ContextMenu.Item>Удалить</ContextMenu.Item>
						</ContextMenu>
					</Row>
				)
			},
		},
	]

	if (loading) return <Spinner />

	if (error) return <ErrorIndicator />

	return (
		<>
			<ToolBar>
				<FilterList>
					<Filter items={[]} onChange={() => {}} defaultValue="Все" />
				</FilterList>
				<Button>Добавить документ</Button>
			</ToolBar>
			<Table data={documents} columns={columns} />
		</>
	)
}

export default DocumentListContainer
