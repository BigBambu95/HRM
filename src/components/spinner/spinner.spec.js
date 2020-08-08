import React from 'react'
import Spinner from './spinner'

describe('Spinner', () => {
	it('Рендер спиннера', () => {
		const spinner = shallow(<Spinner />)
		expect(spinner).toMatchSnapshot()
	})
})
