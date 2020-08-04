import React from 'react'
import Select from './select'

describe('Выпадающий список', () => {
	it('Рендер выпадающего списка с несколькими элементами', () => {
		const select = mount(<Select items={['1', '2', '3']} />)
		expect(select.props().items).toHaveLength(3)
	})
})
