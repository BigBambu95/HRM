export const createQueryString = (obj: ANY_MIGRATION_TYPE) => {
	let query = '?'
	const arr = Object.entries(obj).filter((item) => item[1] !== 'Все')
	arr?.forEach((el) => {
		query += `${el[0]}=${el[1]}`
	})

	return arr.length > 0 ? query : ''
}
