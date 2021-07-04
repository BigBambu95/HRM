import React, { useContext, useEffect } from 'react'
import moment from 'moment'
import 'moment/locale/ru'
import { CalendarIcon } from '@svg'
import { FilterList, Filter, Spinner, ErrorIndicator, ToolBar } from '@components'
import { transformDictionaryValues } from '@helpers/dictionaries'
import useDictionary from '@hooks'
import { StoreContext } from '@store/StoreContext'
import { SalaryTable } from '../components'

const SalaryContainer = () => {
	const { salariesStore: { state, salaryList, fetchSalaryList } } = useContext(StoreContext)

	const [offices, professions, departments] = useDictionary()

	useEffect(() => {
		fetchSalaryList({})
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

	const spinner = state === 'pending' && <Spinner />
	const errorIndicator = state === 'error' && <ErrorIndicator />
	const content = state === 'done' && (
		<SalaryTable
			salary={salaryList.map((salary) => {
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
