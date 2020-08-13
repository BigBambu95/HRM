import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Spinner } from 'components'
import ErrorIndicator from 'components/error-indicator'
import actions from '../actions'
import WorkerDetails from '../components/worker-details'

const WorkerContainer = ({ match, closeWorker, history }) => {
	const dispatch = useDispatch()

	const worker = useSelector((state) => state.workerList.worker)
	const loading = useSelector((state) => state.workerList.loading)
	const error = useSelector((state) => state.workerList.error)

	useEffect(() => {
		dispatch(actions.workers.fetchWorkerRequest(match.params.id))
	}, [match.params.id])

	if (loading) return <Spinner />

	if (error) return <ErrorIndicator />

	return (
		<WorkerDetails
			worker={worker}
			closeWorker={closeWorker}
			history={history}
		/>
	)
}

export default withRouter(WorkerContainer)
