import C from '../contstants';

const workersList = (state, action) => {

    if(state === undefined) {
        return {
            data: {
                information: []
            },
            loading: true,
            error: null
        }
    }

    switch (action.type) {
        case C.FETCH_WORKER_REQUEST:

            return {
                ...state,
                data: {},
                loading: true,
                error: null
            };

        case C.FETCH_WORKER_SUCCESS:

            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            };

        case C.FETCH_WORKER_FAILURE:

            return {
                ...state,
                data: {},
                loading: false,
                error: action.payload
            };

        case C.CLOSE_WORKER:
            return {
                ...state,
                data: {},
            };



        default:
            return state;
    }


};

export default workersList;