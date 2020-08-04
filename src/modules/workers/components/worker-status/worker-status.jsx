import React from 'react';

const WorkerStatus = ({ color = 'green', children }) => {
	const classNames = `worker-status ${color}`;

	return (
		<span className={classNames}>{children}</span>
	);
};

export default WorkerStatus;
