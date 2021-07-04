import React from 'react'
import { Table } from '@components'
import { v4 as uuidv4 } from 'uuid'

export interface SalaryTableProps {
	salary: ANY_MIGRATION_TYPE;
}

const SalaryTable = ({ salary }: SalaryTableProps) => {
	const columns = [
		{
			key: uuidv4(),
			title: 'Имя',
			dataIndex: 'name',
		},
		{
			key: uuidv4(),
			title: 'Часы',
			dataIndex: 'hours',
		},
		{
			key: uuidv4(),
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
