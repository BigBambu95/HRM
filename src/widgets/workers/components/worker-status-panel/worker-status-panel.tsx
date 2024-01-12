import React from 'react'
import WorkerStatus from '../worker-status'

// TODO: Сделать нормально
const WorkerStatusPanel = () => (
	<div className="worker-status-panel">
		<WorkerStatus status="work">На работе</WorkerStatus>
		<WorkerStatus status="mission">В командировке</WorkerStatus>
		<WorkerStatus status="absent">Отсутствует</WorkerStatus>
		<WorkerStatus status="vacation">В отпуске</WorkerStatus>
		<WorkerStatus status="reason">Уважительная причина</WorkerStatus>
	</div>
)

export default WorkerStatusPanel
