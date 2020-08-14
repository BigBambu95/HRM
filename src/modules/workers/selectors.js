import { filterArr } from 'reducers/reducers-utils'

export const selectWorkers = (state) => state.workerList.workers

export const getWorkerDepartments = (state) => {
	const departmentList = state.workerList.workers.map((item) => item.department)
	return [...new Set(departmentList)]
}

export const getFilteredWorkers = (state) =>
	filterArr(
		state.workerList.workers,
		state.workerList.filter.profession,
		state.workerList.filter.office,
		state.workerList.filter.department
	)

export const getWorkersInformation = (state) =>
	state.workerList.workers.map((worker) => worker.information)

export const getWorkerInformationForMonth = (state, month) =>
	state.worker.data.information[0][month]