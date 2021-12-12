import React, { useState, useRef, Children, cloneElement, ReactElement, HTMLAttributes } from 'react'
import classnames from 'classnames'
import { useClickAway } from 'ahooks'
import { ContextMenuIcon } from '../../svg'
import Button from '../button'
import { ContextMenuItemProps } from './ContextMenuItem'

export interface ContextMenuProps extends HTMLAttributes<HTMLDivElement> {
	iconVariant?: string;
	children: ReactElement<ContextMenuItemProps>[] | ReactElement<ContextMenuItemProps>;
}

const ContextMenu = ({ iconVariant, children, ...props }: ContextMenuProps) => {
	const [visible, setVisible] = useState(false)
	const container = useRef(null)

	useClickAway(() => {
		setVisible(false)
	}, container)

	return (
		<div
			className="context-menu"
			ref={container}
			{...props}
		>
			<Button
				variant="icon"
				onClick={() => setVisible((state) => !state)}
				className={classnames('context-menu__btn', iconVariant)}
			>
				<ContextMenuIcon />
			</Button>
			{visible && (
				<div className="context-menu__list">
					{Children.map(children, (child) =>
						cloneElement(child, {
							onInnerClick: () => setVisible(false),
						})
					)}
				</div>
			)}
		</div>
	)
}

export default ContextMenu
