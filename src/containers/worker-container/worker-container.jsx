import React, { Component, useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { worker } from '../../actions'
import {
	getWorker,
	getWorkerInformationForMonth,
} from '../../selectors/workers'
import WorkerDetails from '../../components/worker-details'
import Spinner from '../../components/spinner'
import { withHRMService } from '../../components/hoc'

const WorkerContainer = ({
	loading,
	worker,
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
				worker={worker}
				closeWorker={closeWorker}
				history={history}
			/>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		worker: getWorker(state),
		loading: state.worker.loading,
		error: state.worker.error,
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	const { hrmService, match, history } = ownProps
	const { workerRequest, workerLoaded, workerError, closeWorker } = worker

	return {
		fetchWorker: () => {
			dispatch(workerRequest())
			hrmService
				.getWorker(match.params.id)
				.then((data) => dispatch(workerLoaded(data)))
				.catch((err) => dispatch(workerError(err)))
		},

		closeWorker: () => {
			dispatch(closeWorker())
			history.push('/workers/')
		},
	}
}

export default compose(
	withRouter,
	withHRMService(),
	connect(mapStateToProps, mapDispatchToProps)
)(WorkerContainer)
