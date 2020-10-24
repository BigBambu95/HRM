import React from 'react'
import { Typography } from 'components/index'

const Statistic = ({ title, value }) => {
	return (
		<div className='statistic'>
			<Typography.Text type='secondary'>{title}</Typography.Text>
			<div className='statistic__value'>{value}</div>
		</div>
	)
}

export default Statistic
