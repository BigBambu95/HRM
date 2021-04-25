import React from 'react'

// Получение значения из словаря по ID
export const getDictionaryValueById = (dictionary: Array<ANY_MIGRATION_TYPE>, id: React.Key) => {
	const item = dictionary?.find((i: Record<'_id', React.Key>) => i._id === id)
	return item?.name
}
