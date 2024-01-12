/* eslint-disable max-len */
import React from 'react'

const TagIcon = ({ width = 24, height = 24, fill = '#000' }) => (
	<svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M7.28248 5.11983C7.42948 5.26628 7.42948 5.50371 7.28248 5.65016L0.908739 12L7.27997 18.3473C7.42697 18.4938 7.42697 18.7312 7.27997 18.8777C7.13297 19.0241 6.89464 19.0241 6.74765 18.8777L0.110248 12.2652C-0.0367495 12.1187 -0.0367495 11.8813 0.110248 11.7348L6.75015 5.11983C6.89715 4.97338 7.13548 4.97338 7.28248 5.11983Z"
			fill={fill}
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M6.62483 5.375C6.62483 5.16789 6.79335 5 7.00124 5H23.6236C23.8315 5 24 5.16789 24 5.375V18.625C24 18.8321 23.8315 19 23.6236 19H7.00124C6.79335 19 6.62483 18.8321 6.62483 18.625C6.62483 18.4179 6.79335 18.25 7.00124 18.25H23.2472V5.75H7.00124C6.79335 5.75 6.62483 5.58211 6.62483 5.375Z"
			fill={fill}
		/>
	</svg>
)

export default TagIcon