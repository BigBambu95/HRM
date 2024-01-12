import { SelectValue } from '@shared/components/select/select'
import React from 'react'

// Получение значения из словаря по ID
export const getDictionaryValueById = (dictionary: Array<DictionaryRecord>, id: React.Key) => {
	const item = dictionary.find((i: Record<'id', React.Key>) => i.id === id)
	return item && item.name
}

export const transformDictionaryValues = (dictionary: Array<DictionaryRecord>): Array<SelectValue> => {
	return dictionary.map(({ id, name }) => {
		return {
			id,
			value: name,
		}
	})
}
