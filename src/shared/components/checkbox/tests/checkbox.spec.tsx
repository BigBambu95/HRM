import React from 'react'
import { shallow } from 'enzyme'
import Checkbox from '../Checkbox'

describe('Checkbox', () => {
	it('Рендер чекбокса со значениями по умолчанию', () => {
		const check = shallow(<Checkbox name="test" />)
		expect(check).toMatchSnapshot()
	})

	it('Рендер чекбоса с переданными значениями', () => {
		const check = shallow(
			<Checkbox name="test" className="custom-class">
				Checkbox description
			</Checkbox>
		)

		expect(check).toMatchSnapshot()
	})

	it('Симуляция нажатия чекбокса', () => {
		const onChange = jest.fn()
		const check = shallow(<Checkbox onChange={onChange} />)

		check.find('.checkbox__input').simulate('change')

		expect(onChange).toHaveBeenCalled()
	})
})
