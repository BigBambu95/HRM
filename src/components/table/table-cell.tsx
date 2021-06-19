import React from 'react'

export interface TableCellProps {
	record: string;
	render?: (record: ANY_MIGRATION_TYPE) => React.ReactNode;
}

const TableCell = ({ render, record }: TableCellProps) => (
	<div className="table-cell">{render ? render(record) : record}</div>
)

export default TableCell
