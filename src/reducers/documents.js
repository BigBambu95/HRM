import C from '../contstants';

const sortByAlphabet = (a, b) => {
  if (a.title < b.title) {
    return -1;
  }
  return 1;
};

const sorByDate = (a, b) => new Date(b.date) - new Date(a.date);

const documentList = (state, action) => {
  if (state === undefined) {
    return {
      documents: [],
      documentsSort: '',
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case C.FETCH_DOCUMENTS_REQUEST:
      return {
        documents: [],
        loading: true,
        error: null,
      };

    case C.FETCH_DOCUMENTS_SUCCESS:
      return {
        documents: action.payload,
        loading: false,
        error: null,
      };

    case C.FETCH_DOCUMENTS_FAILURE:
      return {
        documents: [],
        loading: false,
        error: action.payload,
      };

    case C.SORT_DOCUMENTS:

      let sortedDocuments = [];

      switch (action.payload) {
        case 'Название':
          sortedDocuments = state.documents.slice().sort(sortByAlphabet);
          break;

        case 'Дата':
          sortedDocuments = state.documents.slice().sort(sorByDate);
          break;

        default:
          return sortedDocuments;
      }

      return {
        documents: sortedDocuments,
        documentsSort: action.payload,
      };

    case C.REMOVE_DOCUMENT:
      const filterDocuments = state.documents.filter((document) => document.id !== action.payload);

      return {
        ...state,
        documents: filterDocuments,
      };

    default:
      return state;
  }
};

export default documentList;
