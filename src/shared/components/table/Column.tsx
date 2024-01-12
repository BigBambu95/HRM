import React from 'react'

export interface ColumnProps {
	children: React.ReactNode;
	width?: number | string;
}

const Column = ({ children, width }: ColumnProps) => {
	return (
		<div className="table-column" style={{ width }}>
			{children}
		</div>
	)
}

export default Column
