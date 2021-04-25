import React from 'react'
import Select from './select'

describe('Выпадающий список', () => {
	const items = [
		{ _id: '1', value: 'cat' },
		{ _id: '2', value: 'fox' },
		{ _id: '3', value: 'bear' },
	]

	it('Рендер выпадающего списка с несколькими элементами', () => {
		const select = render(<Select items={items} />)
		expect(select).toMatchSnapshot()
		const result = Select.defaultProps.onChange()
		expect(result).toBe(undefined)
	})
})
