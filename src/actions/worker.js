import C from '../constants';

const worker = {
  workerRequest: () => C.FETCH_WORKER_REQUEST,

  workerLoaded: (newWorker) => ({
    payload: newWorker,
    type: C.FETCH_WORKER_SUCCESS,
  }),

  workerError: (err) => ({
    payload: err,
    type: C.FETCH_WORKER_FAILURE,
  }),

  closeWorker: () => C.CLOSE_WORKER,

};

export default worker;
