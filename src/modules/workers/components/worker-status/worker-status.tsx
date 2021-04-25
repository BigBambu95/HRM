import React from 'react'

export interface WorkerStatusProps {
	color?: string;
}

const WorkerStatus: React.FC<WorkerStatusProps> = ({ color = 'green', children }) => (
	<span className={`worker-status ${color}`}>{children}</span>
)

export default WorkerStatus
