import React, {Fragment, Component} from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { worker } from "../../actions";
import {getWorker, getWorkerInformationForMonth} from "../../selectors/workers";
import WorkerDetails from "../../components/worker-details";
import Spinner from "../../components/spinner";
import {withHRMService} from "../../components/hoc";

class WorkerContainer extends Component {

    state = {

    };

    componentDidMount() {
        this.props.fetchWorker();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.id !== prevProps.match.params.id) {
            this.props.fetchWorker();
        }
    }

    render() {

        const { loading, worker, match, closeWorker } = this.props;

        if (loading) {
            return <Spinner/>;
        }

        if(match.params.id === undefined) {
            return null;
        }

        return (
            <Fragment>
                <WorkerDetails worker={worker} closeWorker={closeWorker} history={this.props.history} />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        worker: getWorker(state),
        loading: state.worker.loading,
        error: state.worker.error
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { hrmService, match, history } = ownProps;
    const { workerRequest, workerLoaded, workerError, closeWorker } = worker;

  return {
      fetchWorker: () => {
          dispatch(workerRequest());
          hrmService
              .getWorker(match.params.id)
              .then(data => dispatch(workerLoaded(data)))
              .catch(err => dispatch(workerError(err)));
      },

      closeWorker: () => {
          dispatch(closeWorker());
          history.push('/workers/');
      },
  }
};

export default compose(
    withRouter,
    withHRMService(),
    connect(mapStateToProps, mapDispatchToProps)
)(WorkerContainer);