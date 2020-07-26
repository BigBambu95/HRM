import C from '../contstants';

const documents = {
  documentsRequest: () => C.FETCH_DOCUMENTS_REQUEST,

  documentsLoaded: (newWorkers) => ({
    payload: newWorkers,
    type: C.FETCH_DOCUMENTS_SUCCESS,
  }),

  documentsError: (err) => ({
    payload: err,
    type: C.FETCH_DOCUMENTS_FAILURE,
  }),

  removeDocument: (id) => ({
    type: C.REMOVE_DOCUMENT,
    payload: id,
  }),

  sortDocuments: (payload) => ({
    type: C.SORT_DOCUMENTS,
    payload,
  }),

};

export default documents;
