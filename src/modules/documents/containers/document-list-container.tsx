import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	Spinner,
	ErrorIndicator,
	ContextMenu,
	FilterList,
	Filter,
	Button,
	Row,
} from 'components'
import { Table } from 'components/table'
import { DownloadIcon, PrinterIcon } from 'svg'
import Moment from 'react-moment'
import { ToolBar } from 'components/tool-bar'
import actions from '../actions'

const DocumentListContainer = () => {
	const dispatch = useDispatch()
	const documents = useSelector((state: any) => state.documentList.documents)
	const error = useSelector((state: any) => state.documentList.error)
	const loading = useSelector((state: any) => state.documentList.loading)

	useEffect(() => {
		dispatch(actions.documents.fetchDocumentsRequest())
	}, [])

	const columns = [
		{
			title: 'Название',
			dataIndex: 'name',
		},
		{
			title: 'Дата',
			dataIndex: 'date',
			render: (date) => <Moment format='DD.MM.YY'>{date}</Moment>,
		},
		{
			title: '',
			dataIndex: 'file',
			key: 'download',
			render: (file) => {
				return (
					<Row justify='end' gutter={[24, 0]}>
						<a href={`http://localhost:8080/${file?.id}.${file?.ext}`}>
							<PrinterIcon />
						</a>
						<a
							href={`http://localhost:8080/${file?.id}.${file?.ext}`}
							target='_blank'
							rel='noreferrer'
							download
						>
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
					<Filter 
						label="Random"
						items={[]} 
						// getSelectValue={() => {}} 
						// defaultValue='Все' 
						/>
				</FilterList>
				<Button>Добавить документ</Button>
			</ToolBar>
			<Table data={documents} columns={columns} />
		</>
	)
}

export default DocumentListContainer
