import React, { HTMLAttributes } from 'react'
import classnames from 'classnames'

export interface ListProps<T> extends HTMLAttributes<HTMLDivElement> {
	items: Array<T>;
	renderItem: (item: T) => JSX.Element;
}

function List<T extends Record<'id', React.Key>>({ items, className, renderItem, ...otherProps }: ListProps<T>) {
	const listClasses = classnames('list', className)

	return (
		<div className={listClasses} {...otherProps}>
			{items.map((item) => (
				<div className='list__item' key={item.id}>
					{renderItem(item)}
				</div>
			))}
		</div>
	)
}

export default List
