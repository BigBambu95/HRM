import React, { HTMLAttributes } from 'react'
import classnames from 'classnames'

export interface ListItemProps<T> extends HTMLAttributes<HTMLDivElement> {
	_id: string;
}

export interface ListProps<T> extends HTMLAttributes<HTMLDivElement> {
	items: Array<ListItemProps<T>>;
	renderItem: (item: ListItemProps<T>) => JSX.Element;
}

function List<T>({
	items,
	className,
	renderItem,
	...otherProps
}: ListProps<T>) {
	const listClasses = classnames('list', className)

	return (
		<div className={listClasses} {...otherProps}>
			{items.map((item) => (
				<div className='list__item' key={item._id}>
					{renderItem(item)}
				</div>
			))}
		</div>
	)
}

export default List
