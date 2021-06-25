import React from 'react'

export interface TableColumnProps {
	title: React.ReactNode;
}

const TableColumn = ({ title }: TableColumnProps) => {
	return <div className="table-cell">{title}</div>
}

export default TableColumn
