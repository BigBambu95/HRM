import React from 'react'
import Checkbox from './checkbox'

describe('Checkbox', () => {
	it('Рендер чекбокса со значениями по умолчанию', () => {
		const check = shallow(<Checkbox name='test' />)
		expect(check).toMatchSnapshot()
	})

	it('Рендер чекбоса с переданными значениями', () => {
		const check = shallow(
			<Checkbox name='test' className='custom-class'>
				Checkbox description
			</Checkbox>
		)

		expect(check).toMatchSnapshot()
	})
})
