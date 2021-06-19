const filterArr = <T extends []>(items: T, ...filters: ANY_MIGRATION_TYPE) =>
	items.filter((item) =>
		filters.every(
			(filter: ANY_MIGRATION_TYPE) => Object.values(item).includes(filter) || filter === 'Все'
		)
	)

export { filterArr }
