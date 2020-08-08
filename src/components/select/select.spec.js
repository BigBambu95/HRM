import React from 'react'
import Select from './select'

describe('Выпадающий список', () => {
	it('Рендер выпадающего списка с несколькими элементами', () => {
		const select = mount(
			<Select
				items={[
					{ _id: '1', value: 'cat' },
					{ _id: '2', value: 'fox' },
					{ _id: '3', value: 'bear' },
				]}
			/>
		)
		expect(select.props().items).toHaveLength(3)
	})
})
