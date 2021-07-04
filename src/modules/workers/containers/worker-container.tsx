import React, { useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Spinner, ErrorIndicator } from '@components'
import { observer } from 'mobx-react-lite'
import { StoreContext } from '@store/StoreContext'
import useDictionary from '@hooks'
import { autorun } from 'mobx'
import WorkerDetails from '../components/worker-details'

export interface WorkerContainerProps {
	match: ANY_MIGRATION_TYPE;
	history: ANY_MIGRATION_TYPE;
	closeWorker?: ANY_MIGRATION_TYPE;
}

const WorkerContainer = observer(({ match, closeWorker, history }: WorkerContainerProps) => {
	const { workerStore: {
		worker, state, fetchWorker
	}} = useContext(StoreContext)

	const [professions, offices, departments] = useDictionary()

	useEffect(() => {
		autorun(() => {
			fetchWorker(match.params.id)
		})
	}, [match.params.id])

	if (state === 'pending') return <Spinner />

	if (state === 'error') return <ErrorIndicator />

	return (
		<WorkerDetails
			worker={worker}
			offices={offices}
			professions={professions}
			departments={departments}
			closeWorker={closeWorker}
			history={history}
		/>
	)
})

export default withRouter(WorkerContainer)
