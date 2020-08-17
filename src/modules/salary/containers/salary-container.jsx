import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect, useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import 'moment/locale/ru'

import { CalendarIcon } from 'svg'
import { FilterList, Filter, Spinner, ErrorIndicator } from 'components'
import {
	getWorkersSalary,
	getWorkersNames,
	getMonth,
	getWorkersHours,
	getWorkersIncomeTax,
	getWorkersPensionInsurance,
	getWorkersHealthInsurance,
	getWorkersSocialInsurance,
	getWorkersAccidentInsurance,
	getWorkersPrepayment,
	getWorkersOtherFees,
	getWorkersFinalSalary,
	getWorkersTotalSalary,
} from 'selectors/salary'
import { ToolBar } from 'components/tool-bar'
import { dictionaryActions } from 'dictionaries'
import actions from '../actions'

const SalaryTable = () => {
	return (
		<>
			{/* <Table data={workersHours}>
				<TableColumn data={workersNames} label='Имя' />
				<TableColumn data={workersHours} label='Часы' />
				<TableColumn data={workersSalary} label='Отработано' />
				<TableColumn data={workersOtherFees} label='Прочее' />
				<TableColumn data={workersIncomeTax} label='НДФЛ' />
				<TableColumn data={workersPensionInsurance} label='ПФР' />
				<TableColumn data={workersSocialInsurance} label='ФСС' />
				<TableColumn data={workersHealthInsurance} label='ФФОМС' />
				<TableColumn data={workersAccidentInsurance} label='НСиПЗ' />
				<TableColumn data={workersPrepayment} label='Аванс' />
				<TableColumn data={workersFinalSalary} label='К выдаче' />
			</Table>
			<footer className='salary__footer'>
				<div className='salary__footer__total-sum'>
					{`За ${month} к выдаче ${workersTotalSalary} ₽`}
				</div>
				<Button size='medium' variant='solid' color='purple' font='large'>
					Выдать
				</Button>
			</footer> */}
		</>
	)
}

const SalaryContainer = () => {
	const dispatch = useDispatch()
	const offices = useSelector((state) => state.dictionaries.offices)
	const professions = useSelector((state) => state.dictionaries.professions)
	const departments = useSelector((state) => state.dictionaries.departments)
	const loading = useSelector((state) => state.salaryList.loading)
	const error = useSelector((state) => state.salaryList.error)

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
	const content = !(loading || error) && <SalaryTable />

	return (
		<>
			<ToolBar>
				<FilterList>
					<Filter items={months} filter={() => {}} icon={<CalendarIcon />} />
					<Filter
						label='Офис'
						items={offices}
						filter={() => {}}
						defaultValue='Все'
					/>
					<Filter
						label='Отдел'
						items={departments}
						filter={() => {}}
						defaultValue='Все'
					/>
					<Filter
						label='Должность'
						items={professions}
						filter={() => {}}
						defaultValue='Все'
					/>
				</FilterList>
			</ToolBar>
			{spinner}
			{errorIndicator}
			{content}
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		workersNames: getWorkersNames(state),
		workersHours: getWorkersHours(state),
		workersSalary: getWorkersSalary(state),
		workersOtherFees: getWorkersOtherFees(state),
		workersIncomeTax: getWorkersIncomeTax(state),
		workersPensionInsurance: getWorkersPensionInsurance(state),
		workersHealthInsurance: getWorkersHealthInsurance(state),
		workersSocialInsurance: getWorkersSocialInsurance(state),
		workersAccidentInsurance: getWorkersAccidentInsurance(state),
		workersPrepayment: getWorkersPrepayment(state),
		workersFinalSalary: getWorkersFinalSalary(state),
		workersTotalSalary: getWorkersTotalSalary(state),
		month: getMonth(state),
		loading: state.salaryList.loading,
		error: state.salaryList.error,
	}
}

export default compose(connect(mapStateToProps))(SalaryContainer)
