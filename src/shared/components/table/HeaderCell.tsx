/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ArrowDownIcon } from '@shared/components/icons'
import React from 'react'
import classnames from 'classnames'
import { ColumnType } from './table'
import Cell from './Cell'

export interface HeaderCellProps<T> extends Pick<ColumnType<T>, 'title' | 'sortable'> {
  onSortChanged?: () => void;
	sortDirection?: 'asc' | 'desc' | null;
}

const HeaderCell = <T, >({ 
	title, 
	sortable, 
	sortDirection,
	onSortChanged 
}: HeaderCellProps<T>) => {
	const renderSortIcon = sortable && (
		<div
			className="table-header-cell-sort-icon" 
			style={{ transform: sortDirection === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)'}}
		>
			<ArrowDownIcon /> 
		</div>
	)

	const classNames = classnames("table-header-cell", {
		"table-header-cell-sortable": sortable,
		"table-header-cell-sorted": sortDirection
	})

	return (
		<div className={classNames} onClick={() => sortable && onSortChanged?.()}>
			<Cell record={title} />
			{renderSortIcon}
		</div>
	)
}

export default HeaderCell