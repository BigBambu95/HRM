import React from 'react';
import { Link } from 'react-router-dom';

import { FireIcon, PencilIcon, RemoveBasketIcon } from '../../svg';
import { ContextMenu, ContextMenuItem } from '../context-menu';

const VacancyListItem = ({ item, deleteItem, addTab }) => {
  const {
    profession, url, office, date, quickly = false,
  } = item;

  const fireIcon = quickly && <FireIcon />

  return (
    <div className="vacancy-list__item">
      <Link to={`/vacancies/${url}`} onClick={() => addTab(profession, `/vacancies/${url}`, office, 'Вакансии')}>
        <div className="vacancy-list__item__description">
          <div className="vacancy-list__item__city">{office}</div>
          <h3 className="vacancy-list__item__title">{profession}</h3>
        </div>
        <div className="vacancy-list__item__right">
          <div className="label">Крайний срок до:</div>
          <div className="vacancy-list__item__date">
            {fireIcon}
            {date}
          </div>
        </div>
      </Link>
      <ContextMenu>
        <ContextMenuItem
          handleClick={() => console.log(`edit ${url}`)}
          icon={<PencilIcon width={16} height={16} />}
        >
          Изменить
        </ContextMenuItem>
        <ContextMenuItem
          handleClick={() => deleteItem(url)}
          icon={<RemoveBasketIcon width={16} height={16} />}
        >
          Удалить
        </ContextMenuItem>
      </ContextMenu>
    </div>
  );
};

export default VacancyListItem;
