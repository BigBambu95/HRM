import React, { useEffect } from 'react'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { Spinner } from 'components'
import { withHRMService } from 'components/hoc'
import WorkerDetails from '../components/worker-details'

const WorkerContainer = ({
	loading,
	match,
	closeWorker,
	fetchWorker,
	history,
}) => {
	useEffect(() => {
		fetchWorker()
	}, [match.params.id])

	if (loading) {
		return <Spinner />
	}

	if (match.params.id === undefined) {
		return null
	}

	return (
		<>
			<WorkerDetails
				// worker={worker}
				closeWorker={closeWorker}
				history={history}
			/>
		</>
	)
}

// const mapStateToProps = (state) => {
// 	return {
// 		worker: getWorker(state),
// 		loading: state.worker.loading,
// 		error: state.worker.error,
// 	}
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
// 	const { hrmService, match, history } = ownProps
// 	const { workerRequest, workerLoaded, workerError, closeWorker } = actions

// 	return {
// 		fetchWorker: () => {
// 			dispatch(workerRequest())
// 			hrmService
// 				.getWorker(match.params.id)
// 				.then((data) => dispatch(workerLoaded(data)))
// 				.catch((err) => dispatch(workerError(err)))
// 		},

// 		closeWorker: () => {
// 			dispatch(closeWorker())
// 			history.push('/workers/')
// 		},
// 	}
// }

export default compose(
	withRouter,
	withHRMService(),
	// connect(mapStateToProps, mapDispatchToProps)
)(WorkerContainer)
