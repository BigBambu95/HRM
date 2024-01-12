import React, { HTMLAttributes } from 'react'

export interface RecordProps extends HTMLAttributes<HTMLDivElement> {
	field?: string;
	label?: string;
}

const Record: React.FC<RecordProps> = ({ field, label, ...otherProps }) => (
	<div className='record' {...otherProps}>
		<span>{label}</span>
		<span>{field}</span>
	</div>
)

export default Record
