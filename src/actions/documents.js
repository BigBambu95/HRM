import C from '../contstants';

const documents = {
     documentsRequest: () => C.FETCH_DOCUMENTS_REQUEST,

     documentsLoaded: newWorkers => {
        return {
            payload: newWorkers,
            type: C.FETCH_DOCUMENTS_SUCCESS
        }
    },

     documentsError: err => {
        return {
            payload: err,
            type: C.FETCH_DOCUMENTS_FAILURE
        }
    },

     removeDocument: id => {
        return {
            type: C.REMOVE_DOCUMENT,
            payload: id
        }
    },

     sortDocuments: payload => {
        return {
            type: C.SORT_DOCUMENTS,
            payload
        }
    }


};

export default documents;