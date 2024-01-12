import React from 'react'
import { shallow } from 'enzyme'
import Spinner from '../spinner'

describe('Spinner', () => {
	it('Рендер спиннера', () => {
		const spinner = shallow(<Spinner />)
		expect(spinner).toMatchSnapshot()
	})
})
