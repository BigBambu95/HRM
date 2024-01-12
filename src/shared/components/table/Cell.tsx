import React from 'react'

export interface CellProps<T> {
	record: T;
	render?: (record: T) => React.ReactNode;
}

const Cell = <T, >({ render, record, }: CellProps<T>) => (
	<div className="table-cell">
		{render?.(record) || record}
	</div>
)

export default Cell
