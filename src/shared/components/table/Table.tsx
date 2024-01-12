import React, { useState } from 'react'
import { ErrorIndicator, Spinner } from '@shared/components'
import Column from './Column'
import Cell from './Cell'
import HeaderCell from './HeaderCell'

export interface ColumnType<T> {
	key: React.Key;
	dataIndex: string;
	title: string;
	width?: number | string;
	render?: (record: T) => React.ReactNode;
	sortable?: boolean;
}

export type SortType = [string, 'asc' | 'desc' | null] | null

export interface TableProps<T> {
	data: T[];
	columns: ColumnType<T>[];
	onSortChanged?: (sort: SortType) => void;
	loading?: StateType;
}

const Table = <T extends Record<string, any>>({ 
	data, 
	columns,
	onSortChanged,
	loading,
}: TableProps<T>) => {
	const [sort, setSort] = useState<SortType>(null)

	const renderCells = (column: ColumnType<T>) => data.map((cell) => {
		return (
			<Cell
				record={cell[column.dataIndex]}
				render={column.render} 
			/>
		)
	})

	const getSortDirection = (state: SortType) => {
		if(state?.[1] === 'asc') return null
		if(state?.[1] === 'desc') return 'asc'

		return 'desc'
	}

	const onSortChangedHandler = (column: ColumnType<T>) => {
		setSort((state) => {
			const newState: SortType = [column.dataIndex, getSortDirection(state)]

			onSortChanged?.(newState)
			return newState
		})
	}

	const spinner = loading === 'pending' && <Spinner />
	const errorIndicator = loading === 'error' && <ErrorIndicator />

	return (
		<div className="table-wrapper">
			{spinner}
			{errorIndicator}
			<div className="table" style={{ gridTemplateColumns: `repeat(${columns.length}, 1fr)` }}>
				{loading === 'done' && columns.map((column) => {
					return (
						<Column key={column.key} width={column.width}>	
							<>
								<HeaderCell
									{...column}
									sortDirection={sort?.[0] === column.dataIndex ? sort?.[1] : null}
									onSortChanged={() => onSortChangedHandler(column)}
								/>
								{renderCells(column)}
							</>
						</Column>
					)
				})}
				<div />
			</div>
		</div>
	)
}

export default Table
