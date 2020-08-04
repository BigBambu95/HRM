import React, { useEffect } from 'react'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux'

import { addTab } from 'actions'
import {
	Button,
	Grid,
	Filter,
	FilterList,
	Spinner,
	ErorIndicator,
} from 'components'
import actions from '../actions'
import {
	getFilteredWorkers,
	selectWorkerProfessions,
	getWorkerOffices,
	getWorkerDepartments,
} from '../selectors'

import WorkerListItem from '../components/worker-list-item'

import WorkerStatusPanel from '../components/worker-status-panel'

import { ToolBar, ToolBarGroupItem } from '../../../components/tool-bar'

const WorkerListContainer = ({ match }) => {
	const dispatch = useDispatch()

	const filteredWorkers = useSelector((state) => getFilteredWorkers(state))
	const workerProfessions = useSelector((state) =>
		selectWorkerProfessions(state)
	)
	const workerOffices = useSelector((state) => getWorkerOffices(state))
	const workerDepartments = useSelector((state) => getWorkerDepartments(state))
	const isWorker = useSelector((state) => state.workerList.isWorker)
	const loading = useSelector((state) => state.workerList.loading)
	const error = useSelector((state) => state.workerList.error)

	useEffect(() => {
		dispatch(actions.fetchWorkersRequest())
	}, [])

	useEffect(() => {
		// match.params.id !== undefined && openWorker(match.params.id)
	}, [match.params.id])

	const columns = isWorker ? 1 : 2
	const clazz = isWorker ? 'worker-list opened-worker' : 'worker-list'

	const workerList = filteredWorkers.map((worker) => {
		return (
			<WorkerListItem
				key={worker.id}
				item={worker}
				match={match}
				addTab={addTab}
			/>
		)
	})

	const itemList =
		filteredWorkers.length === 0 ? (
			<p>По данным параметрам фильтрации не найдено результатов!</p>
		) : (
			<Grid columns={columns} gap='2em'>
				{workerList}
			</Grid>
		)

	if (loading) return <Spinner />

	if (error) return <ErorIndicator />

	return (
		<>
			<div className={clazz}>
				<ToolBar>
					<FilterList>
						<Filter
							label='Должность'
							items={workerProfessions.concat('Все')}
							filter={() => {}}
							defaultValue='Все'
						/>
						<Filter
							label='Офис'
							items={workerOffices.concat('Все')}
							filter={() => {}}
							defaultValue='Все'
						/>
						<Filter
							label='Отдел'
							items={workerDepartments.concat('Все')}
							filter={() => {}}
							defaultValue='Все'
						/>
					</FilterList>
					<ToolBarGroupItem>
						<Button>Выделить нескольких</Button>
					</ToolBarGroupItem>
				</ToolBar>
				<WorkerStatusPanel />
				{itemList}
			</div>
		</>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		// openWorker: (id) => {
		// 	dispatch(openWorker())
		// 	history.push(`/workers/${id}`)
		// },
		addTab: (label, path, office, prevPage) => {
			dispatch(
				addTab({
					label,
					path,
					office,
					prevPage,
				})
			)
		},
	}
}

export default compose(
	withRouter,
	connect(null, mapDispatchToProps)
)(WorkerListContainer)
