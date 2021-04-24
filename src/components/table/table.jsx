import React from 'react'
import PropTypes from 'prop-types'
import TableColumn from './table-column'
import TableCell from './table-cell'

const Table = ({ data, columns }) => (
	<div className='table-wrapper'>
		<table className='table'>
			<thead>
				<tr>
					{columns.map((column) => {
						return <TableColumn key={column.key || column.dataIndex} data={column} />
					})}
				</tr>
			</thead>
			<tbody>
				{data.map((row) => {
					return (
						<tr key={row._id} className='table__row'>
							{columns.map((column) => (
								<TableCell
									key={column.key || column.dataIndex}
									record={row[column.dataIndex]}
									render={column.render}
								/>
							))}
						</tr>
					)
				})}
			</tbody>
		</table>
	</div>
)

Table.propTypes = {
	data: PropTypes.array.isRequired,
	columns: PropTypes.array.isRequired,
}

export default Table
