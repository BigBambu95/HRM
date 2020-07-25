import C from '../contstants';

const offices = {
    officesRequest: () => C.FETCH_OFFICES_REQUEST,
    officesLoaded: (offices) => {
        return {
            payload: offices,
            type: C.FETCH_OFFICES_SUCCESS
        }
    },
    officesError: (err) => {
        return {
            payload: err,
            type: C.FETCH_OFFICES_FAILURE
        }
    },

};

export default offices;