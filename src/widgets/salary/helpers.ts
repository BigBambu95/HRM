export const getWorkersSalary = (item: Salary) => Math.round(item.hourlySalary * item.hours)

export const getWorkersIncomeTax = (salary: number) => Math.round((salary * 13) / 100)

export const getWorkersPensionInsurance = (salary: number) => Math.round((salary * 22) / 100)

export const getWorkersSocialInsurance = (salary: number) => Math.round((salary * 2.9) / 100)

export const getWorkersHealthInsurance = (salary: number) => Math.round((salary * 5.1) / 100)

export const getWorkersAccidentInsurance = (salary: number) => Math.round((salary * 0.2) / 100)
