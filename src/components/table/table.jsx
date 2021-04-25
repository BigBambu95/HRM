import React from 'react'
import PropTypes from 'prop-types'
import TableColumn from './table-column'
import TableCell from './table-cell'

const Table = ({ data, columns }) => (
	<div className='table-wrapper'>
		<div className='table'>
			<div>
				<div>
					{columns.map((column) => {
						return <TableColumn key={column.key || column.dataIndex} data={column} />
					})}
				</div>
			</div>
			<div>
				{data.map((row) => {
					return (
						<div key={row._id} className='table__row'>
							{columns.map((column) => (
								<TableCell
									key={column.key || column.dataIndex}
									record={row[column.dataIndex]}
									render={column.render}
								/>
							))}
						</div>
					)
				})}
			</div>
		</div>
	</div>
)

Table.propTypes = {
	data: PropTypes.array.isRequired,
	columns: PropTypes.array.isRequired,
}

export default Table
