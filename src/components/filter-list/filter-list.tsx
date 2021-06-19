import React, { ReactElement, useState } from 'react'
import classnames from 'classnames'
import { Button } from 'components'
import { FilterIcon, ArrowDownIcon } from 'svg'
import { FilterProps } from '../filter/filter'

export interface FilterListProps {
	children: ReactElement<FilterProps>[] | ReactElement<FilterProps>;
}

const FilterList = ({ children }: FilterListProps) => {
	const [isShowFilterList, showFilterList] = useState(true)
	const btnClassNames = classnames('filter-list__btn', {
		'filter-list__btn_active': isShowFilterList,
	})

	return (
		<div className="filter-list">
			<Button variant="text" className={btnClassNames} onClick={() => showFilterList(!isShowFilterList)}>
				<FilterIcon />
				<span>
					Фильтр
					<ArrowDownIcon />
				</span>
			</Button>
			{isShowFilterList && <div className="filter-list__items">{children}</div>}
		</div>
	)
}

export default React.memo(FilterList)
