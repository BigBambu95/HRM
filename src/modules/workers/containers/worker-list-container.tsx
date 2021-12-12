import React, { useContext, useEffect } from 'react'
import classnames from 'classnames'
import { Button, Filter, FilterList, ToolBar, ToolBarGroupItem } from '@components'
import { transformDictionaryValues } from '@helpers/dictionaries'
import { observer } from 'mobx-react-lite'
import useDictionary from '@hooks'
import { StoreContext } from '@store/StoreContext'
import { autorun } from 'mobx'
import { ItemList } from '@templates'
import WorkerListItem from '../components/worker-list-item'
import WorkerStatusPanel from '../components/worker-status-panel'

const WorkerListContainer = ({ match }: ANY_MIGRATION_TYPE) => {
	const {
		tabsStore: { addTab },
		workersStore: { fetchWorkers, filter, workers, state, setFilter: setFilterAction },
	} = useContext(StoreContext)

	const [professions, offices, departments] = useDictionary()

	useEffect(() => {
		autorun(() => {
			fetchWorkers(filter)
		})
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
				addTab={addTab}
			/>
		)
	})

	const setFilter = (name: string) => ({ id, value }: { id: React.Key, value: string }) => {
		setFilterAction({ name, value: value !== 'Все' ? id.toString() : value })
	}

	return (
		<div className={className}>
			<ItemList
				header={(
					<>
						<ToolBar>
							<FilterList>
								<Filter
									label="Должность"
									items={transformDictionaryValues(professions)}
									onChange={setFilter('profession')}
								/>
								<Filter label="Офис" items={transformDictionaryValues(offices)} onChange={setFilter('office')} />
								<Filter
									label="Отдел"
									items={transformDictionaryValues(departments)}
									onChange={setFilter('department')}
								/>
							</FilterList>
							<ToolBarGroupItem>
								<Button>Добавить сотрудника</Button>
							</ToolBarGroupItem>
						</ToolBar>
						<WorkerStatusPanel />
					</>
				)}
				state={state}
				items={workerList}
				columns={columns}
			/>
		</div>
	)
}

export default observer(WorkerListContainer)
