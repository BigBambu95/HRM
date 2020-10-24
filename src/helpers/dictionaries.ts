// Получение значения из словаря по ID
export const getDictionaryValueById = (dictionary, id) => {
	const item = dictionary?.find((i) => i._id === id)
	return item?.name
}
