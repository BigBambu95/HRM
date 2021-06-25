import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'reducers'
import { withRouter } from 'react-router-dom'
import { Spinner, ErrorIndicator } from 'components'
import actions from '../actions'
import WorkerDetails from '../components/worker-details'

export interface WorkerContainerProps {
	match: ANY_MIGRATION_TYPE;
	history: ANY_MIGRATION_TYPE;
	closeWorker?: ANY_MIGRATION_TYPE;
}

const WorkerContainer = ({ match, closeWorker, history }: WorkerContainerProps) => {
	const dispatch = useDispatch()

	const offices = useSelector((state) => state.dictionaries.offices)
	const departments = useSelector((state) => state.dictionaries.departments)
	const professions = useSelector((state) => state.dictionaries.professions)
	const worker = useSelector((state) => state.workerList.worker)
	const loading = useSelector((state) => state.workerList.loading)
	const error = useSelector((state) => state.workerList.error)

	useEffect(() => {
		dispatch(actions.fetchWorkerRequest(match.params.id))
		dispatch(actions.fetchWorkerSalaryRequest(match.params.id))
	}, [match.params.id])

	if (loading) return <Spinner />

	if (error) return <ErrorIndicator />

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
}

export default withRouter(WorkerContainer)
