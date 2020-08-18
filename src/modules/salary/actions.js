import { createActions } from 'redux-actions'
import { REQUEST, SUCCESS, FAILURE } from 'helpers/redux'
import { FETCH_SALARY } from './types'

export default createActions({
	[REQUEST(FETCH_SALARY)]: () => ({}),
	[SUCCESS(FETCH_SALARY)]: (salary) => salary,
	[FAILURE(FETCH_SALARY)]: (err) => err,
})
