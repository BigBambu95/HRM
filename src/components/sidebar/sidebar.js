import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { compose } from "redux";
import {connect} from "react-redux";
import { withHRMService } from '../hoc';
import SidebarLink from '../sidebar-link';
import {
    addTab,
    hotVacanciesRequest,
    hotVacanciesError,
    hotVacanciesLoaded,
} from "../../actions";




class Sidebar extends Component {


    componentDidMount() {
        const {fetchHotVacancies, addTab } = this.props;
        fetchHotVacancies();
 
    }

    componentDidUpdate(prevProps) {
        if(this.props.activeTab.path !== prevProps.activeTab.path) {
            this.props.history.push(this.props.activeTab.path);
        }
    }

    getActiveMenuItem = () => {
        const { menu, location } = this.props;
        const activeItem = menu.filter(item => location.pathname.includes(item.path));
        return activeItem[0];
    };


    render() {

    const { menu, location, addTab } = this.props;


    const mainMenu = menu.map(link => {
            const isActive = location.pathname.includes(link.path);
            const classNames = isActive ? 'active' : null;



        return(
                <li className={classNames} key={link.id}>
                    <SidebarLink path={link.path}
                                 icon={link.icon}
                                 addTab={addTab}
                                 subLinks={link.subLinks}
                    >
                        {link.label}
                    </SidebarLink>
                </li>
            )
        });

    return(
        <aside className="sidebar">
            <ul>
                {mainMenu}
            </ul>
        </aside>
    )

    }
}

const mapStateToProps = (state) => {
    return {
        tabs: state.tabList.tabs,
        activeTab: state.tabList.activeTab,
        menu: state.menu.items
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {

    const { hrmService } = ownProps;

   return {
       addTab: (label, path) => {

           dispatch(addTab({
               label,
               path
           }))
       },

       fetchHotVacancies: () => {
           dispatch(hotVacanciesRequest());
           hrmService
               .getVacancies()
               .then(data => dispatch(hotVacanciesLoaded(data)))
               .catch(err => dispatch(hotVacanciesError(err)));
       }
   }
};

export default compose(
    withRouter,
    withHRMService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Sidebar);