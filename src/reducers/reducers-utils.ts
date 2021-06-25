const filterArr = (items: ANY_MIGRATION_TYPE, ...filters: ANY_MIGRATION_TYPE) =>
	items.filter((item: ANY_MIGRATION_TYPE) =>
		filters.every((filter: ANY_MIGRATION_TYPE) => Object.values(item).includes(filter) || filter === 'Все')
	)

export { filterArr }
