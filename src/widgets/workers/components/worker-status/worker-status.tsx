import React from 'react'

export interface WorkerStatusProps {
	status?: string;
}

const WorkerStatus: React.FC<WorkerStatusProps> = ({ status = 'work', children }) => (
	<span className={`worker-status ${status}`}>{children}</span>
)

export default WorkerStatus
