import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import 'moment/locale/ru'
import { CalendarIcon } from 'svg'
import { FilterList, Filter, Spinner, ErrorIndicator } from 'components'
import { ToolBar } from 'components/tool-bar'
import { dictionaryActions } from 'dictionaries'
import { useSelector } from 'reducers'
import actions from '../actions'
import { SalaryTable } from '../components'
import { transformDictionaryValues } from '../../../helpers/dictionaries'

const SalaryContainer = () => {
	const dispatch = useDispatch()
	const offices = useSelector((state) => state.dictionaries.offices)
	const professions = useSelector((state) => state.dictionaries.professions)
	const departments = useSelector((state) => state.dictionaries.departments)
	const salaries = useSelector((state) => state.salaryList.salaries)
	const loading = useSelector((state) => state.salaryList.loading)
	const error = useSelector((state) => state.salaryList.error)

	useEffect(() => {
		dispatch(actions.fetchSalaryRequest())
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
			id: idx,
			label: monthsRu[idx],
			value: item,
		}
	})

	const spinner = loading && <Spinner />
	const errorIndicator = error && <ErrorIndicator />
	const content = !(loading || error) && (
		<SalaryTable
			salary={salaries.map((salary) => {
				return {
					...salary,
				}
			})}
		/>
	)

	return (
		<>
			<ToolBar>
				<FilterList>
					<Filter items={months} icon={<CalendarIcon />} />
					<Filter
						label="Офис"
						items={transformDictionaryValues(offices)}
						onChange={({ value }) =>
							dispatch(
								actions.setFilter({
									name: 'office',
									value: value ?? 'Все',
								})
							)
						}
						defaultValue="Все"
					/>
					<Filter
						label="Отдел"
						items={transformDictionaryValues(departments)}
						onChange={({ value }) =>
							dispatch(
								actions.setFilter({
									name: 'department',
									value: value ?? 'Все',
								})
							)
						}
						defaultValue="Все"
					/>
					<Filter
						label="Должность"
						items={transformDictionaryValues(professions)}
						onChange={({ value }) =>
							dispatch(
								actions.setFilter({
									name: 'profession',
									value: value ?? 'Все',
								})
							)
						}
						defaultValue="Все"
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
