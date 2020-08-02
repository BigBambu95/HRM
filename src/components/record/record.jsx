import React from 'react'

const Record = ({ field, label }) => (
	<div className='record'>
		<span>{label}</span>
		{field}
	</div>
)

export default Record
