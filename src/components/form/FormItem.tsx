import React, { ReactElement } from 'react'

export interface FormItemProps {
	children: ReactElement;
	validation?: boolean; // TODO: Type it
	label?: string;
}

const FormItem: React.FC<FormItemProps> = ({ children, validation, label }) => {
	const child = React.Children.only(children)

	return (
		<div className="form-item">
			<div className="form-item__label">{label}</div>
			{React.cloneElement(child, { className: validation && 'validation-error' })}
			{validation && <div className="form-item__error">Заполните обязательное поле</div>}
		</div>
	)
}

export default FormItem
