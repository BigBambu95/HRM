import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'reducers'
import classnames from 'classnames'
import { addTab } from 'actions'
import { Button, Grid, Filter, FilterList, ToolBar, ToolBarGroupItem } from 'components'
import { dictionaryActions } from 'dictionaries'
import { transformDictionaryValues } from 'helpers/dictionaries'
import { useLoadData } from 'hooks'
import actions from '../actions'
import WorkerListItem from '../components/worker-list-item'
import WorkerStatusPanel from '../components/worker-status-panel'

const WorkerListContainer = ({ match }: ANY_MIGRATION_TYPE) => {
	const dispatch = useDispatch()
	const professions = useSelector((state) => state.dictionaries.professions)
	const offices = useSelector((state) => state.dictionaries.offices)
	const departments = useSelector((state) => state.dictionaries.departments)
	const filter = useSelector((state) => state.workerList.filter)
	const workers = useSelector((state) => state.workerList.workers)

	useEffect(() => {
		dispatch(dictionaryActions.fetchOfficesRequest())
		dispatch(dictionaryActions.fetchDepartmentsRequest())
		dispatch(dictionaryActions.fetchProfessionsRequest())
	}, [])

	useEffect(() => {
		dispatch(actions.fetchWorkersRequest(filter))
	}, [filter])

	const columns = match.params.id ? 1 : 2
	const className = classnames('worker-list', {
		'opened-worker': match.params.id,
	})

	const workerList = workers.map((w) => {
		return (
			<WorkerListItem
				key={w.id}
				worker={w}
				departments={departments}
				offices={offices}
				professions={professions}
				match={match}
				addTab={(param) => dispatch(addTab(param))}
			/>
		)
	})

	const itemList =
		workers.length === 0 ? (
			<p>По данным параметрам фильтрации не найдено результатов!</p>
		) : (
			<Grid columns={columns} gap="2em">
				{workerList}
			</Grid>
		)

	const [content, spinner, errorIndicator] = useLoadData(itemList)

	const setFilter = (name: string) => ({ id, value }: { id: React.Key, value: string }) =>
		dispatch(actions.setFilter({ name, value: value !== 'Все' ? id.toString() : value }))

	return (
		<div className={className}>
			<ToolBar>
				<FilterList>
					<Filter label="Должность" items={transformDictionaryValues(professions)} onChange={setFilter('profession')} />
					<Filter label="Офис" items={transformDictionaryValues(offices)} onChange={setFilter('office')} />
					<Filter label="Отдел" items={transformDictionaryValues(departments)} onChange={setFilter('department')} />
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
