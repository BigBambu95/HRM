import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

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
	const worker = useSelector((state) => state.workerList.worker)
	const loading = useSelector((state) => state.workerList.loading)
	const error = useSelector((state) => state.workerList.error)

	useEffect(() => {
		dispatch(actions.fetchWorkersRequest())
	}, [])

	const columns = worker ? 1 : 2
	const clazz = worker ? 'worker-list opened-worker' : 'worker-list'

	const workerList = filteredWorkers.map((w) => {
		return (
			<WorkerListItem
				key={w._id}
				item={w}
				match={match}
				addTab={(label, path, office, prevPage) =>
					dispatch(addTab(label, path, office, prevPage))
				}
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
					<Button>Добавить сотрудника</Button>
				</ToolBarGroupItem>
			</ToolBar>
			<WorkerStatusPanel />
			{itemList}
		</div>
	)
}

export default withRouter(WorkerListContainer)
