import React from 'react';


const TabBarItem = ({ children }) => {
    return(
        <div className="tab-bar__item">
            {children}
        </div>
    )
};

export default TabBarItem;