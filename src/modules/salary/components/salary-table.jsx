import React from 'react'
import { Table } from 'components'

const SalaryTable = ({ salary }) => {
	const columns = [
		{
			title: 'Часы',
			dataIndex: 'hours',
		},
		{
			title: 'Часовая ставка',
			dataIndex: 'hourlySalary',
		},
	]

	return (
		<>
			<Table data={salary} columns={columns} />
			{/* <footer className='salary__footer'>
				<div className='salary__footer__total-sum'>
					{`За ${month} к выдаче ${workersTotalSalary} ₽`}
				</div>
				<Button size='medium' variant='solid' color='purple' font='large'>
					Выдать
				</Button>
			</footer> */}
		</>
	)
}

export default SalaryTable
