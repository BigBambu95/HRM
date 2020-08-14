import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner, ErorIndicator } from 'components'
import { Table } from 'components/table'
import { ArrowDownIcon, DownloadIcon, PrinterIcon } from 'svg'
import actions from '../actions'

const DocumentListContainer = ({ sort }) => {
	// const classNames = `document-table__sort-row ${documentsSort}`

	const dispatch = useDispatch()
	const documents = useSelector((state) => state.documentList.documents)
	const error = useSelector((state) => state.documentList.error)
	const loading = useSelector((state) => state.documentList.loading)

	useEffect(() => {
		dispatch(actions.documents.fetchDocumentsRequest())
	}, [])

	const documentSortButtons = ['Название', 'Дата']

	const documentSortButtonList = documentSortButtons.map((item) => (
		<div key={item}>
			<button className='sort-btn' onClick={() => sort(item)}>
				{item}
				<ArrowDownIcon />
			</button>
		</div>
	))

	if (loading) return <Spinner />

	if (error) return <ErorIndicator />

	return (
		<Table data={documents} sortButtons={documentSortButtonList}>
			<div>
				<PrinterIcon />
			</div>
			<div className='download-link'>
				<a
					href={document.link}
					target='_blank'
					rel='noopener noreferrer'
					download
				>
					<DownloadIcon />
				</a>
			</div>
			<div className='open-link'>
				<a href={document.link} target='_blank' rel='noopener noreferrer'>
					Открыть
				</a>
			</div>
			{/* <div>
      <ContextMenu deleteItem={deleteDocument} itemId={document.id} />
    </div> */}
		</Table>
	)
}

export default DocumentListContainer
