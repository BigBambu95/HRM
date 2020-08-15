import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import moment from 'moment'
import 'moment/locale/ru'

import { salary } from '../actions'

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
} from '../selectors/salary'

import { CalendarIcon } from '../svg'
import { Table, TableColumn } from '../components/table'

import Button from '../components/button'
import { ToolBar } from '../components/tool-bar'
import FilterList from '../components/filter-list'
import Filter from '../components/filter'
import Spinner from '../components/spinner'
import ErrorIndicator from '../components/error-indicator'

const SalaryTable = ({
	workersNames,
	workersHours,
	workersSalary,
	workersIncomeTax,
	workersPensionInsurance,
	workersHealthInsurance,
	workersSocialInsurance,
	workersAccidentInsurance,
	workersPrepayment,
	workersOtherFees,
	workersFinalSalary,
	workersTotalSalary,
	month,
}) => {
	return (
		<>
			<Table data={workersHours}>
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
			</footer>
		</>
	)
}

class SalaryTableContainer extends Component {
	componentDidMount() {
		const { month, fetchSalary } = this.props
		fetchSalary(month)
	}

	componentDidUpdate(prevProps) {
		const { month, fetchSalary } = this.props

		if (month !== prevProps.month) {
			fetchSalary(month)
		}
	}

	render() {
		const { setMonth, loading, error } = this.props

		moment.locale('en')
		const monthsEn = moment.months()

		moment.locale('ru')
		const monthsRu = moment.months()

		const months = monthsEn.map((item, idx) => {
			return {
				label: monthsRu[idx],
				value: item,
			}
		})

		const spinner = loading ? <Spinner /> : null
		const errorIndicator = error ? <ErrorIndicator /> : null
		const content = !(loading || error) ? <SalaryTable {...this.props} /> : null

		return (
			<>
				<ToolBar>
					<FilterList>
						<Filter items={months} filter={setMonth} icon={<CalendarIcon />} />
						<Filter label='Офис' />
						<Filter label='Отдел' />
						<Filter label='Должность' />
					</FilterList>
				</ToolBar>
				{spinner}
				{errorIndicator}
				{content}
			</>
		)
	}
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

const mapDispatchToProps = (dispatch, ownProps) => {
	const { hrmService } = ownProps
	const { salaryRequest, salaryLoaded, salaryError, setMonth } = salary

	return {
		fetchSalary: (month) => {
			dispatch(salaryRequest())
			hrmService
				.getWorkersInformationForMonth(month)
				.then((data) => dispatch(salaryLoaded(data)))
				.catch((err) => dispatch(salaryError(err)))
		},
		setMonth: (val) => dispatch(setMonth(val)),
		// sort: (val) => dispatch(sort(val))
	}
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(
	SalaryTableContainer
)
