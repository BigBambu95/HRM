import React from 'react'
import TableColumn from './table-column'
import TableCell from './table-cell'

export interface ColumnType {
	key: React.Key;
	dataIndex: string;
	title: React.ReactNode;
	render?: (record: ANY_MIGRATION_TYPE) => React.ReactNode;
}

export type ColumnsType = Array<ColumnType>

export interface TableProps {
	data: ANY_MIGRATION_TYPE;
	columns: ColumnsType;
}

const Table = ({ data, columns }: TableProps) => (
	<div className="table-wrapper">
		<div className="table">
			<div>
				<div>
					{columns.map((column) => {
						return <TableColumn key={column.key} title={column.title} />
					})}
				</div>
			</div>
			<div>
				{data.map((row: ANY_MIGRATION_TYPE) => {
					return (
						<div key={row.id} className="table__row">
							{columns.map((column) => (
								<TableCell key={column.key} record={row[column.dataIndex]} render={column.render} />
							))}
						</div>
					)
				})}
			</div>
		</div>
	</div>
)

export default Table
