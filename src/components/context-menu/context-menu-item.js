import React from 'react';
import Button from "../button";


const ContextMenuItem = ({ handleClick, icon, children }) => {
    return(
        <span className="context-menu__list__item">
            <Button clickHandler={handleClick} variant="icon">
                {icon} {children}
            </Button>
        </span>
    )
};

export default ContextMenuItem;