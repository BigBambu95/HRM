import React, { useState } from 'react';
import classNames from 'classnames';

import TabBarNav from "./tab-bar-nav";


const TabBar = (props) => {


    const [activeTab, setActiveTab] = useState(getChildrenLabels(props.children)[0]);

    function getChildrenLabels (children) {
      return children.map(({ props }) => props.label);
    }


    const renderTabs = () => {
        const { children } = props;

        return getChildrenLabels(children).map(navLabel => {
           return(
               <TabBarNav key={navLabel}
                          className={classNames({ active: activeTab === navLabel})}
                          setActiveTab={setActiveTab}>
                   {navLabel}
               </TabBarNav>
           )
        });
    };

    return(
        <div className="tab-bar">
            <div className="tab-bar__nav">
                {renderTabs()}
            </div>
            {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child);
                })
            }
        </div>
    )
};

export default TabBar;