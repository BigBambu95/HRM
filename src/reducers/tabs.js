import { handleActions } from 'redux-actions'

const updateObjectInArray = (array, payload, index) =>
	array.map((item, idx) => {
		if (idx !== index) {
			return item
		}

		return {
			...item,
			...payload,
		}
	})

const initialState = {
	tabs: [],
	activeTab: '',
}

const tabList = handleActions(
	{
		ADD_TAB: (state, { payload }) => {
			const tabIdx = state.tabs.findIndex((tab) =>
				payload.path?.includes(tab.path)
			)

			if (tabIdx !== -1) {
				return {
					tabs: updateObjectInArray(state.tabs, payload, tabIdx),
					activeTab: payload,
				}
			}

			return {
				tabs: [...state.tabs, payload],
				activeTab: payload,
			}
		},
		REMOVE_TAB: (state, { payload }) => {
			const filterTabs = state.tabs.filter((tab, idx) => idx !== payload)

			return {
				tabs: filterTabs,
				activeTab: filterTabs[filterTabs.length - 1],
			}
		},
	},
	initialState
)

export default tabList
