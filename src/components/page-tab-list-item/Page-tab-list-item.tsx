import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../button';
import { BackIcon, CloseIcon } from '../../svg';

const PageTabListItem = ({
  path, label, office, prevPage, removeTab, idx, location, history,
}) => {
  const renderPrevPage = prevPage ? (
    <div className="tab-list__item__prev-page">
      {prevPage}
      /
    </div>
  ) : null;
  const renderOffice = office ? <div className="tab-list__item__office">{office}</div> : null;
  const arrowBack = office || prevPage ? <Button variant="icon" className="tab-list__item__back" onClick={() => history.goBack()}><BackIcon /></Button> : null;
  const styles = prevPage || office ? { padding: '.35em .5em' } : {};

  const isActive = location.pathname === path;

  const classNames = isActive ? 'tab-list__item active' : 'tab-list__item';

  return (
    <li className={classNames} style={styles}>
      {arrowBack}
      <div>
        {renderPrevPage}
        <div className="flex align-items-center">
          <Link to={path}>{label}</Link>
          <Button variant="icon" className="close-btn" onClick={() => removeTab(idx)}>
            <CloseIcon width={16} height={16} />
          </Button>
        </div>
        {renderOffice}
      </div>
    </li>
  );
};

PageTabListItem.defaultProps = {
  office: '',
  prevPage: '',
};

export default PageTabListItem;
