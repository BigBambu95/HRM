import { SelectProps } from 'components/select/select'
import React from 'react'
import Select from '../select'

export interface FilterProps extends SelectProps {
	label?: string;
}

const Filter: React.FC<FilterProps> = ({ label, ...props }) => (
	<div className="filter">
		{label && <span className="filter__label">{label}</span>}
		<Select {...props} />
	</div>
)

export default Filter
