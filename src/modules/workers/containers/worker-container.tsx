import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Spinner } from 'components'
import ErrorIndicator from 'components/error-indicator'
import actions from '../actions'
import WorkerDetails from '../components/worker-details'

const WorkerContainer = ({ match, closeWorker, history }) => {
	const dispatch = useDispatch()

	const offices = useSelector((state: any) => state.dictionaries.offices)
	const departments = useSelector((state: any) => state.dictionaries.departments)
	const professions = useSelector((state: any) => state.dictionaries.professions)
	const worker = useSelector((state: any) => state.workerList.worker)
	const loading = useSelector((state: any) => state.workerList.loading)
	const error = useSelector((state: any) => state.workerList.error)

	useEffect(() => {
		dispatch(actions.workers.fetchWorkerRequest(match.params.id))
		dispatch(actions.workers.fetchWorkerSalaryRequest(match.params.id))
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
			// history={history}
		/>
	)
}

export default withRouter(WorkerContainer as any)
