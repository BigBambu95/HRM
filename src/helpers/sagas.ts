export const createQueryString = (obj: FilterType) => {
	let query = '?'
	const arr = Object.entries(obj).filter((item) => item[1] !== 'Все')
	arr?.forEach((el) => {
		query += `${el[0]}=${el[1]}`
	})

	return arr.length > 0 ? query : ''
}
