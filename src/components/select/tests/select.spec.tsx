import React from 'react'
import { render } from 'enzyme'
import Select from '../select'

describe('Выпадающий список', () => {
	const items = [
		{ id: '1', value: 'cat' },
		{ id: '2', value: 'fox' },
		{ id: '3', value: 'bear' },
	]

	it('Рендер выпадающего списка с несколькими элементами', () => {
		const select = render(<Select items={items} />)

		expect(select).toMatchSnapshot()
	})
})
