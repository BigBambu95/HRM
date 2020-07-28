import C from '../constants';

const updateObjectInArray = (array, action, index) => array.map((item, idx) => {
  if (idx !== index) {
    return item;
  }

  return {
    ...item,
    ...action.payload,
  };
});

const tabList = (state, action) => {
  if (state === undefined) {
    return {
      tabs: [],
      activeTab: '',
    };
  }

  switch (action.type) {
    case C.ADD_TAB:

      const tabIdx = state.tabs.findIndex((tab) => action.payload.path.includes(tab.path));

      if (tabIdx !== -1) {
        return {
          tabs: updateObjectInArray(state.tabs, action, tabIdx),
          activeTab: action.payload,
        };
      }

      const newTabs = [
        ...state.tabs,
        action.payload,
      ];

      return {
        tabs: newTabs,
        activeTab: action.payload,
      };

    case C.REMOVE_TAB:

      const filterTabs = state.tabs.filter((tab, idx) => idx !== action.payload);

      return {
        tabs: filterTabs,
        activeTab: filterTabs[filterTabs.length - 1],
      };

    default:
      return state;
  }
};

export default tabList;
