import React, { Component } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';

import { ArrowDownIcon } from "../../svg";
import Button from "../button";

class Select extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        icon: PropTypes.node,
        getSelectValue: PropTypes.func,
        defaultValue: PropTypes.string
    };

    static defaultProps = {
        items: [],
        icon: <ArrowDownIcon />,
        getSelectValue: function() {},
        defaultValue: ''
    };

    state = {
        isOpen: false,
        selectValue: {
            value: this.props.defaultValue,
            label: this.props.defaultValue
        }
    };


    componentDidUpdate(prevProps, prevState, snapshot) {
        const { selectValue } = this.state;

        if(selectValue.value !== prevState.selectValue.value) {
            this.props.getSelectValue(selectValue.value, this.props.label)
        }

    }

    handleClickOutside = e => {
        this.setState({
           isOpen: false
        });
    };


    setIsOpen = () => {
      this.setState({
          isOpen: !this.state.isOpen
      })
    };

    chooseItem = (value, label) => {

        const newItem = {
            value,
            label
        };

        this.setState({
            selectValue: newItem,
            isOpen: false
        })
    };

    render() {
        const selectClassNames = this.state.isOpen ? 'select active' : 'select';

        const selectList = this.props.items.map((item, idx) => (
            <li key={idx}
                className="select__list__item"
                onClick={() => this.chooseItem(item.value || item, item.label || item )}
            >
                {item.label || item}
            </li>
        )
    );


    return(
        <div className={selectClassNames}>
            <div className="select__current-item">
                {this.state.selectValue.label}
            </div>
            <Button variant="icon" clickHandler={this.setIsOpen}>
                {this.props.icon}
            </Button>
            <ul className="select__list">
                {selectList}
            </ul>
        </div>
    )

}


}


export default onClickOutside(Select);