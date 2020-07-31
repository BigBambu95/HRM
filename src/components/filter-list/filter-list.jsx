import React, { useState } from 'react';
import { FilterIcon, ArrowDownIcon } from '../../svg';

const FilterList = ({ children }) => {
  const [isShowFilterList, showFilterList] = useState(true);
  const filterItems = <div className="filter-list__items">{children}</div>;
  const btnClassNames = isShowFilterList ? 'filter-list__btn active' : 'filter-list__btn';

  // TODO заменить кнопку на кастомный компонент
  return (
    <div className="filter-list">
      <button
        type="button"
        className={btnClassNames}
        onClick={() => showFilterList(!isShowFilterList)}
      >
        <FilterIcon />
        <span>
          Фильтр
          <ArrowDownIcon />
        </span>
      </button>
      {isShowFilterList && filterItems}
    </div>
  );
};

export default FilterList;
