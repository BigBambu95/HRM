import { ErrorIndicator, Grid, Spinner } from '@shared/components'
import React, { ReactNode } from 'react'

export interface ItemListProps<T> {
	header: ReactNode;
	state: StateType;
	items: T;
	renderItems?: ReactNode;
	columns?: number;
}

const ItemList = <T extends any[]>({ header, state, items, renderItems, columns = 3 }: ItemListProps<T>) => {
	const itemList = items.length === 0 ? (
		<p>По данным параметрам фильтрации не найдено результатов!</p>
	) : (
		<Grid columns={columns} gap="2em">
			{renderItems ?? items}
		</Grid>
	)

	const spinner = state === 'pending' && <Spinner />
	const errorIndicator = state === 'error' && <ErrorIndicator />
	const content = state === 'done' && itemList

	return (
		<>
			<div className="item-list__toolbar">{header}</div>
			{spinner}
			{errorIndicator}
			{content}
		</>
	)
}

export default ItemList
