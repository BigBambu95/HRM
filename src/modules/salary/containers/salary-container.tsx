import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import 'moment/locale/ru'

import { CalendarIcon } from 'svg'
import { FilterList, Filter, Spinner, ErrorIndicator } from 'components'
import { ToolBar } from 'components/tool-bar'
import { dictionaryActions } from 'dictionaries'
import actions from '../actions'
import { SalaryTable } from '../components'

const SalaryContainer = () => {
	const dispatch = useDispatch()
	const offices = useSelector((state: any) => state.dictionaries.offices)
	const professions = useSelector((state: any) => state.dictionaries.professions)
	const departments = useSelector((state: any) => state.dictionaries.departments)
	const salaries = useSelector((state: any) => state.salaryList.salaries)
	const loading = useSelector((state: any) => state.salaryList.loading)
	const error = useSelector((state: any) => state.salaryList.error)

	useEffect(() => {
		dispatch(actions.salary.fetchSalaryRequest())
		dispatch(dictionaryActions.fetchOfficesRequest())
		dispatch(dictionaryActions.fetchProfessionsRequest())
		dispatch(dictionaryActions.fetchDepartmentsRequest())
	}, [])

	moment.locale('en')
	const monthsEn = moment.months()

	moment.locale('ru')
	const monthsRu = moment.months()

	const months = monthsEn?.map((item, idx) => {
		return {
			label: monthsRu[idx],
			value: item,
		}
	})

	const spinner = loading && <Spinner />
	const errorIndicator = error && <ErrorIndicator />
	const content = !(loading || error) && <SalaryTable salary={salaries} />

	return (
		<>
			<ToolBar>
				<FilterList>
					<Filter 
						label="Random"
						items={months} 
						// filter={() => {}} 
						// icon={<CalendarIcon />} 
					/>
					<Filter
						label='Офис'
						items={offices}
						// filter={() => {}}
						// defaultValue='Все'
					/>
					<Filter
						label='Отдел'
						items={departments}
						// filter={() => {}}
						// defaultValue='Все'
					/>
					<Filter
						label='Должность'
						items={professions}
						// filter={() => {}}
						// defaultValue='Все'
					/>
				</FilterList>
			</ToolBar>
			{spinner}
			{errorIndicator}
			{content}
		</>
	)
}

// const mapStateToProps = (state) => {
// 	return {
// 		workersNames: getWorkersNames(state),
// 		workersHours: getWorkersHours(state),
// 		workersSalary: getWorkersSalary(state),
// 		workersOtherFees: getWorkersOtherFees(state),
// 		workersIncomeTax: getWorkersIncomeTax(state),
// 		workersPensionInsurance: getWorkersPensionInsurance(state),
// 		workersHealthInsurance: getWorkersHealthInsurance(state),
// 		workersSocialInsurance: getWorkersSocialInsurance(state),
// 		workersAccidentInsurance: getWorkersAccidentInsurance(state),
// 		workersPrepayment: getWorkersPrepayment(state),
// 		workersFinalSalary: getWorkersFinalSalary(state),
// 		workersTotalSalary: getWorkersTotalSalary(state),
// 		month: getMonth(state),
// 		loading: state.salaryList.loading,
// 		error: state.salaryList.error,
// 	}
// }

export default SalaryContainer
