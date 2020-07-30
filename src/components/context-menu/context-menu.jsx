import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { ContextMenuIcon } from '../../svg'

class ContextMenu extends Component {
	static defaultProps = {
		iconVariant: '',
	}

	static propTypes = {
		iconVariant: PropTypes.string,
	}

	state = {
		isOpen: false,
	}

	handleClickOutside = (e) => {
		this.setState({
			isOpen: false,
		})
	}

	setIsOpen = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		})
	}

	render() {
		const { deleteItem, archiveItem, editItem, itemId, iconVariant, children } = this.props
		const { isOpen } = this.state

		const btnClass = classnames({
			[`context-menu__btn ${iconVariant}`]: true,
			active: isOpen,
		})

		const listClass = classnames({
			[`context-menu__list`]: true,
			active: isOpen,
		})

		return (
			<div className="context-menu">
				<button onClick={this.setIsOpen} className={btnClass}>
					<ContextMenuIcon />
				</button>
				<div className={listClass}>
					{React.Children.map(children, (child) => {
						return React.cloneElement(child)
					})}
				</div>
			</div>
		)
	}
}

export default ContextMenu
