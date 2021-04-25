import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addTab } from 'actions'
import { Button, Grid, Filter, FilterList, Spinner, ErrorIndicator } from 'components'
import { dictionaryActions } from 'dictionaries'
import actions from '../actions'
import WorkerListItem from '../components/worker-list-item'
import WorkerStatusPanel from '../components/worker-status-panel'
import { ToolBar, ToolBarGroupItem } from '../../../components/tool-bar'

const WorkerListContainer = ({ match }) => {
	const dispatch = useDispatch()
	const professions = useSelector((state) => state.dictionaries.professions)
	const offices = useSelector((state) => state.dictionaries.offices)
	const departments = useSelector((state) => state.dictionaries.departments)
	const filter = useSelector((state) => state.workerList.filter)
	const workers = useSelector((state) => state.workerList.workers)
	const loading = useSelector((state) => state.workerList.loading)
	const error = useSelector((state) => state.workerList.error)

	useEffect(() => {
		dispatch(dictionaryActions.fetchOfficesRequest())
		dispatch(dictionaryActions.fetchProfessionsRequest())
		dispatch(dictionaryActions.fetchDepartmentsRequest())
	}, [])

	useEffect(() => {
		dispatch(actions.workers.fetchWorkersRequest(filter))
	}, [filter])

	const columns = match.params.id ? 1 : 2
	const clazz = match.params.id ? 'worker-list opened-worker' : 'worker-list'

	const workerList = workers.map((w) => {
		return (
			<WorkerListItem
				key={w._id}
				worker={w}
				departments={departments}
				offices={offices}
				professions={professions}
				match={match}
				addTab={(label, path, office, prevPage) => dispatch(addTab(label, path, office, prevPage))}
			/>
		)
	})

	const itemList =
		workers.length === 0 ? (
			<p>По данным параметрам фильтрации не найдено результатов!</p>
		) : (
			<Grid columns={columns} gap='2em'>
				{workerList}
			</Grid>
		)

	const spinner = loading && <Spinner />
	const errorIndicator = error && <ErrorIndicator />
	const content = !(loading || error) && itemList

	return (
		<div className={clazz}>
			<ToolBar>
				<FilterList>
					<Filter
						label='Должность'
						items={professions}
						onChange={({ _id }) =>
							dispatch(
								actions.workers.setFilter({
									name: 'profession',
									value: _id ?? 'Все',
								})
							)
						}
						defaultValue='Все'
					/>
					<Filter
						label='Офис'
						items={offices}
						onChange={({ _id }) =>
							dispatch(
								actions.workers.setFilter({
									name: 'office',
									value: _id ?? 'Все',
								})
							)
						}
						defaultValue='Все'
					/>
					<Filter
						label='Отдел'
						items={departments}
						onChange={({ _id }) =>
							dispatch(
								actions.workers.setFilter({
									name: 'department',
									value: _id ?? 'Все',
								})
							)
						}
						defaultValue='Все'
					/>
				</FilterList>
				<ToolBarGroupItem>
					<Button>Добавить сотрудника</Button>
				</ToolBarGroupItem>
			</ToolBar>
			<WorkerStatusPanel />
			{spinner}
			{errorIndicator}
			{content}
		</div>
	)
}

export default WorkerListContainer
