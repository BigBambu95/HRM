import React, {Fragment} from 'react';
import PageTabListItem from "../page-tab-list-item";


const PageTabList = ({ tabs, removeTab, location, history }) => {

    const tabList = tabs.map((item, idx) => {
        return(
            <Fragment key={idx}>
                <PageTabListItem {...item} removeTab={removeTab} idx={idx} location={location} history={history} />
            </Fragment>
        )
    });

  return (
      <ul className="page-tab-list">
          {tabList}
      </ul>
  )
};

export default PageTabList;