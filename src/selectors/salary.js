import { createSelector } from 'reselect';

export const getMonth = state => state.salaryList.month;

export const getWorkersNames = state => state.salaryList.salary.map(item => item.name);

export const getWorkersHours = state => state.salaryList.salary.map(item => item.hoursWorked);

export const getWorkersOtherFees = state => state.salaryList.salary.map(item => item.otherFees);

export const getWorkersSalary = state => state.salaryList.salary.map(item => {
    if(item.hoursWorked === undefined) return null;
    return Math.round(item.hourlySalary * item.hoursWorked)
});

export const getWorkersIncomeTax = createSelector(
    getWorkersSalary,
    getWorkersSalary => getWorkersSalary.map(item => Math.round(item * 13 / 100))
);

export const getWorkersPensionInsurance = createSelector(
    getWorkersSalary,
    getWorkersSalary => getWorkersSalary.map(item => Math.round(item * 22 / 100))
);

export const getWorkersHealthInsurance = createSelector(
    getWorkersSalary,
    getWorkersSalary => getWorkersSalary.map(item => Math.round(item * 5.1 / 100))
);

export const getWorkersSocialInsurance = createSelector(
    getWorkersSalary,
    getWorkersSalary => getWorkersSalary.map(item => Math.round(item * 2.9 / 100))
);

export const getWorkersAccidentInsurance = createSelector(
    getWorkersSalary,
    getWorkersSalary => getWorkersSalary.map(item => Math.round(item * 0.2 / 100))
);

export const getWorkersPrepayment = createSelector(
    getWorkersSalary,
    getWorkersSalary => getWorkersSalary.map(item => Math.round(item * 50 / 100))
);

export const getWorkersFinalSalary = createSelector(
    getWorkersSalary,
    getWorkersOtherFees,
    getWorkersIncomeTax,
    getWorkersPensionInsurance,
    getWorkersHealthInsurance,
    getWorkersSocialInsurance,
    getWorkersAccidentInsurance,
    (getWorkersSalary, getWorkersOtherFees,
        getWorkersIncomeTax, getWorkersPensionInsurance,
        getWorkersHealthInsurance, getWorkersSocialInsurance,
        getWorkersAccidentInsurance
    ) => getWorkersSalary.map((item, idx) => {
        return item + getWorkersOtherFees[idx] - getWorkersIncomeTax[idx]
            - getWorkersPensionInsurance[idx] - getWorkersHealthInsurance[idx]
            - getWorkersSocialInsurance[idx] - getWorkersAccidentInsurance[idx];
    })
);

export const getWorkersTotalSalary = createSelector(
    getWorkersFinalSalary,
    getWorkersFinalSalary => getWorkersFinalSalary.reduce((sum, current) => {
        return sum + current;
    }, 0)
);