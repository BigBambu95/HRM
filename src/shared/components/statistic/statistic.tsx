import React from 'react'
import { Typography } from '@shared/components'

export interface StatisticProps {
	title: string;
	value: string;
}

const Statistic: React.FC<StatisticProps> = ({ title, value }) => {
	return (
		<div className='statistic'>
			<Typography.Text type='secondary'>{title}</Typography.Text>
			<div className='statistic__value'>{value}</div>
		</div>
	)
}

export default Statistic
