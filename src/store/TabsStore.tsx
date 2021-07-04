import { makeAutoObservable } from 'mobx'

export class TabsStore {
	tabs: Array<ANY_MIGRATION_TYPE> = []

	activeTab = {}

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true })
	}

	addTab(tab: ANY_MIGRATION_TYPE) {
		const tabIdx = this.tabs.findIndex((t) => tab.path?.includes(t.path))

		if (tabIdx !== -1) {
			this.tabs[tabIdx] = tab
		} else {
			this.tabs.push(tab)
		}

		this.activeTab = tab
	}

	removeTab(index: number) {
		this.tabs = this.tabs.filter((_, idx) => idx !== index)
		this.activeTab = this.tabs[this.tabs.length - 1]
	}
}

export default TabsStore
