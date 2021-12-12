import { ErrorIndicator, Grid, Spinner } from '@components'
import React, { ReactNode } from 'react'

export interface ItemListProps {
	header: ReactNode;
	state: StateType;
	items: any;
	renderItems?: JSX.Element[];
	columns?: number;
}

const ItemList = ({ header, state, items, renderItems, columns = 3 }: ItemListProps) => {
	const itemList =
		items.length === 0 ? (
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
