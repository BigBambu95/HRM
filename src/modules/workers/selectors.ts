import { filterArr } from 'reducers/reducers-utils'
import { RootState } from 'reducers'

export const getFilteredWorkers = (state: RootState) =>
	filterArr(
		state.workerList.workers,
		state.workerList.filter.profession,
		state.workerList.filter.office,
		state.workerList.filter.department
	)

// export const getWorkersInformation = (state) => state.workerList.workers.map((worker) => worker.information)
//
// export const getWorkerInformationForMonth = (state: RootState, month: string) => state.worker.data.information[0][month]
