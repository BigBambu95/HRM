import { filterArr } from '../reducers/reducers-utils';

export const getWorkers = (state) => state.workerList.workers;

export const getWorker = (state) => state.worker.data;

export const getWorkerProfessions = (state) => {
  const professionList = state.workerList.workers.map((item) => item.profession);
  return [...new Set(professionList)];
};

export const getWorkerOffices = (state) => {
  const officeList = state.workerList.workers.map((item) => item.office);
  return [...new Set(officeList)];
};

export const getWorkerDepartments = (state) => {
  const departmentList = state.workerList.workers.map((item) => item.department);
  return [...new Set(departmentList)];
};

export const getFilteredWorkers = (state) => filterArr(
  state.workerList.workers, state.workerList.filterProfession,
  state.workerList.filterOffice, state.workerList.filterDepartment,
);

export const getWorkersInformation = (state) => state.workerList.workers.map((worker) => worker.information);

export const getWorkerInformationForMonth = (state, month) => state.worker.data.information[0][month];
