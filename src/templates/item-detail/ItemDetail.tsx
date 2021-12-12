import React, { ReactNode } from 'react'

export interface ItemDetailProps {
	toolbar?: ReactNode;
	picture?: ReactNode;
	description?: ReactNode;
	info?: ReactNode;
	actions?: ReactNode;
	others?: ReactNode;
}

const ItemDetail = ({ toolbar, picture, description, info, actions, others }: ItemDetailProps) => {
	const baseClassName = 'item-detail'
	const contentClassName = `${baseClassName}__content`

	return(
		<div className={baseClassName}>
			<div className={`${baseClassName}__toolbar`}>{toolbar}</div>
			<div className={contentClassName}>
				<div className={`${contentClassName}__left`}>
					<div className={`${contentClassName}__picture`}>{picture}</div>
					<div className={`${contentClassName}__description`}>{description}</div>
					<div className={`${contentClassName}__info`}>{info}</div>
				</div>
				<div className={`${contentClassName}__right`}>
					<div className={`${contentClassName}__actions`}>{actions}</div>
					{others}
				</div>
			</div>
		</div>
	)
}

export default ItemDetail