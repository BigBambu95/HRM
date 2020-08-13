import React, { useEffect } from 'react'
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
import { dictionaryActions } from 'dictionaries'
import actions from '../actions'
import { getFilteredWorkers, getWorkerDepartments } from '../selectors'

import WorkerListItem from '../components/worker-list-item'
import WorkerStatusPanel from '../components/worker-status-panel'
import { ToolBar, ToolBarGroupItem } from '../../../components/tool-bar'

const WorkerListContainer = ({ match }) => {
	const dispatch = useDispatch()

	const filteredWorkers = useSelector((state) => getFilteredWorkers(state))
	const professions = useSelector((state) => state.dictionaries.professions)
	const offices = useSelector((state) => state.dictionaries.offices)
	const workerDepartments = useSelector((state) => getWorkerDepartments(state))
	const loading = useSelector((state) => state.workerList.loading)
	const error = useSelector((state) => state.workerList.error)

	useEffect(() => {
		dispatch(actions.workers.fetchWorkersRequest())
		dispatch(dictionaryActions.fetchOfficesRequest())
		dispatch(dictionaryActions.fetchProfessionsRequest())
	}, [])

	const columns = match.params.id ? 1 : 2
	const clazz = match.params.id ? 'worker-list opened-worker' : 'worker-list'

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
						items={professions}
						getSelectValue={(value) =>
							dispatch(actions.workers.setFilter({ name: 'profession', value }))
						}
						defaultValue='Все'
					/>
					<Filter
						label='Офис'
						items={offices}
						getSelectValue={(value) =>
							dispatch(actions.workers.setFilter({ name: 'office', value }))
						}
						defaultValue='Все'
					/>
					<Filter
						label='Отдел'
						items={workerDepartments.concat('Все')}
						getSelectValue={() => {}}
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

export default WorkerListContainer
