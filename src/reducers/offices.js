import C from '../contstants';

const officeList = (state, action) => {

    if(state === undefined) {
        return {
            offices: [],
            loading: true,
            error: null
        }
    }

    switch (action.type) {
        case C.FETCH_OFFICES_REQUEST:
            return {
                offices: [],
                loading: true,
                error: null
            };

        case C.FETCH_OFFICES_SUCCESS:
            return {
                offices: action.payload,
                loading: false,
                error: null
            };

        case C.FETCH_OFFICES_FAILURE:
            return {
                offices: [],
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }

};

export default officeList;