import { SelectValue } from 'components/select/select'
import React from 'react'

// Получение значения из словаря по ID
export const getDictionaryValueById = (dictionary: Array<DictionaryRecord>, id: React.Key) => {
	const item = dictionary?.find((i: Record<'_id', React.Key>) => i._id === id)
	return item?.name
}

export const transformDictionaryValues = (dictionary: Array<DictionaryRecord>): Array<SelectValue> => {
	return dictionary.map(({ _id, name }) => {
		return {
			id: _id,
			value: name,
		}
	})
}
