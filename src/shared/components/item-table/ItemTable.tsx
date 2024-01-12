import React, { ReactNode } from 'react'

export interface ItemTableProps<T> {
	header: ReactNode;
	items: T;
	render?: ReactNode;
}

const ItemTable = <T extends any[]>({ header, items, render}: ItemTableProps<T>) => {
	const itemTable = items.length === 0 
		? <p>По данным параметрам фильтрации не найдено результатов!</p> 
		: render

	return (
		<>
			<div className="item-list__toolbar">{header}</div>
			{itemTable}
		</>
	)
}

export default ItemTable
