import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Spinner } from 'components'
import ErrorIndicator from 'components/error-indicator'
import actions from '../actions'
import WorkerDetails from '../components/worker-details'

const WorkerContainer = ({ match, closeWorker, history }) => {
	const dispatch = useDispatch()

	const offices = useSelector((state) => state.dictionaries.offices)
	const departments = useSelector((state) => state.dictionaries.departments)
	const professions = useSelector((state) => state.dictionaries.professions)
	const worker = useSelector((state) => state.workerList.worker)
	const loading = useSelector((state) => state.workerList.loading)
	const error = useSelector((state) => state.workerList.error)

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
			history={history}
		/>
	)
}

export default withRouter(WorkerContainer)
