import C from '../contstants';

const salary = {
     salaryRequest: () => C.FETCH_SALARY_REQUEST,

     salaryLoaded: newSalary => {
        return {
            payload: newSalary,
            type: C.FETCH_SALARY_SUCCESS
        }
    },

     salaryError: err => {
        return {
            payload: err,
            type: C.FETCH_SALARY_FAILURE
        }
    },

    sort: payload => {
         return {
             type: C.SORT_SALARY,
             payload
         }
    },

    setMonth: payload => {
         return {
             type: C.SET_MONTH,
             payload
         }
    }

};

export default salary;