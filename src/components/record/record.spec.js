import React from 'react'
import Record from './record'

describe('Record', () => {
	it('Render record', () => {
		const record = shallow(
			<Record label='Профессия' field='Front-end developer' />
		)

		expect(record).toMatchSnapshot()
	})
})
