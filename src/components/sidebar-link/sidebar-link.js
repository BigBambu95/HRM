import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownIcon } from '../../svg';
import Button from '../button';

const SubMenuList = ({ items, path, isShow }) => {
  const links = items.map((item) => {
    const { id, profession, url } = item;

    return (
      <li key={id} className="sub-menu__item">
        <Link to={`${path}${url}`}>
          {profession}
        </Link>
      </li>
    );
  });

  const classNames = isShow ? 'sub-menu active' : 'sub-menu';

  return (
    <ul className={classNames}>
      {links}
    </ul>
  );
};

const SidebarLink = ({
  icon, path, children, addTab, subLinks,
}) => {
  const [isShowSubMenu, showSubMenu] = useState(false);

  const arrow = subLinks.length ? <ArrowDownIcon /> : null;
  const subMenu = subLinks.length ? <SubMenuList items={subLinks} path={path} isShow={isShowSubMenu} /> : null;

  const arrowClassNames = isShowSubMenu ? 'arrow-btn active' : 'arrow-btn';

  return (
    <>
      <div className="sidebar__link">
        <Link to={path} onClick={() => addTab(children, path)}>
          <span>
            <span className="sidebar__link__icon">
              {icon}
            </span>
            {children}
          </span>
        </Link>
        <Button clickHandler={() => showSubMenu(!isShowSubMenu)} classname={arrowClassNames} variant="icon">
          {arrow}
        </Button>
      </div>
      {subMenu}
    </>
  );
};

SidebarLink.defaultProps = {
  subLinks: [],
};

export default SidebarLink;
