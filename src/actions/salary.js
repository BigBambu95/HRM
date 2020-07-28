import C from '../constants';

const salary = {
  salaryRequest: () => C.FETCH_SALARY_REQUEST,

  salaryLoaded: (newSalary) => ({
    payload: newSalary,
    type: C.FETCH_SALARY_SUCCESS,
  }),

  salaryError: (err) => ({
    payload: err,
    type: C.FETCH_SALARY_FAILURE,
  }),

  sort: (payload) => ({
    type: C.SORT_SALARY,
    payload,
  }),

  setMonth: (payload) => ({
    type: C.SET_MONTH,
    payload,
  }),

};

export default salary;
