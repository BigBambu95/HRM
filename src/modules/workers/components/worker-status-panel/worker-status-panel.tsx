import React from 'react'
import WorkerStatus from '../worker-status'

// TODO: Сделать нормально
const WorkerStatusPanel = () => (
	<div className='worker-status-panel'>
		<WorkerStatus color='work'>На работе</WorkerStatus>
		<WorkerStatus color='blue'>В командировке</WorkerStatus>
		<WorkerStatus color='orange'>Отсутствует</WorkerStatus>
		<WorkerStatus color='aqua'>В отпуске</WorkerStatus>
		<WorkerStatus color='yellow'>Уважительная причина</WorkerStatus>
	</div>
)

export default WorkerStatusPanel
