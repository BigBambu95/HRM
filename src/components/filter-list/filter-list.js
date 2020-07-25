import React, { useState } from 'react';
import { FilterIcon, ArrowDownIcon } from "../../svg";

const FilterList = ({ children }) => {

    const [isShowFilterList, showFilterList] = useState(true);

    const filterItems = <div className="filter-list__items">{children}</div>;

    const content = isShowFilterList ? filterItems : null;

    const btnClassNames = isShowFilterList ? 'filter-list__btn active' : 'filter-list__btn';

    return(
        <div className="filter-list">
            <button className={btnClassNames}
                    onClick={() => showFilterList(!isShowFilterList)}
            >
                <FilterIcon />
                <span>Фильтр <ArrowDownIcon /> </span>
            </button>
            {content}
        </div>
    )
};


export default FilterList;