import C from '../contstants';

const worker = {
    workerRequest: () => C.FETCH_WORKER_REQUEST,

    workerLoaded: newWorker => {
        return {
            payload: newWorker,
            type: C.FETCH_WORKER_SUCCESS
        }
    },

    workerError: err => {
        return {
            payload: err,
            type: C.FETCH_WORKER_FAILURE
        }
    },

    closeWorker: () => C.CLOSE_WORKER,

};


export default worker;