import React, { useContext, useEffect } from 'react'
import moment from 'moment'
import 'moment/locale/ru'
import { CalendarIcon } from '@shared/components/icons'
import { FilterList, Filter, ToolBar, Table, ContextMenu, ItemTable } from '@shared/components'
import { transformDictionaryValues } from '@shared/helpers/dictionaries'
import useDictionary from '@shared/hooks'
import { StoreContext } from '@app/store/StoreContext'
import { autorun } from 'mobx'
import { observer } from 'mobx-react-lite'
import { ColumnType } from '@shared/components/table'
import { 
	getWorkersAccidentInsurance, 
	getWorkersHealthInsurance, 
	getWorkersIncomeTax, 
	getWorkersPensionInsurance, 
	getWorkersSalary,
	getWorkersSocialInsurance 
} from '../helpers'

const SalaryContainer = () => {
	const { 
		salariesStore: { 
			state, 
			salaryList, 
			fetchSalaryList, 
			setFilter: setFilterAction
		},  
	} = useContext(StoreContext)

	const [offices, professions, departments] = useDictionary()

	useEffect(() => {
		autorun(() =>	fetchSalaryList({}))
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

	const columns: ColumnType<unknown>[] = [
		{
			key: 'name',
			title: 'Имя',
			dataIndex: 'name',
			sortable: true,
			width: 200
		},
		{
			key: 'hours',
			title: 'Часы',
			dataIndex: 'hours',
			sortable: true
		},
		{
			key: 'workedOut',
			title: 'Отработано',
			dataIndex: 'workedOut',
			sortable: true
		},
		{
			key: 'other',
			title: 'Прочее',
			dataIndex: 'other',
			sortable: true
		},
		{
			key: 'incomeTax',
			title: 'НДФЛ',
			dataIndex: 'incomeTax', 
			sortable: true
		},
		{
			key: 'pensionInsurance',
			title: 'ПФР',
			dataIndex: 'pensionInsurance',
			sortable: true
		},
		{
			key: 'socialInsurance',
			title: 'ФСС',
			dataIndex: 'socialInsurance',
			sortable: true
		},
		{
			key: 'healthInsurance',
			title: 'ФФОМС',
			dataIndex: 'healthInsurance',
			sortable: true
		},
		{
			key: 'accidentInsurance',
			title: 'НСиПЗ',
			dataIndex: 'accidentInsurance',
			sortable: true
		},
		{
			key: 'prepayment',
			title: 'Аванс',
			dataIndex: 'prepayment',
			sortable: true
		},
		{
			key: 'total',
			title: 'К выдаче',
			dataIndex: 'total',
			sortable: true
		},
	]

	const setFilter = (name: string) => ({ id, value }: { id: React.Key, value: string }) => {
		setFilterAction({ 
			name, 
			value: value !== 'Все' ? id.toString() : value 
		})
	}

	const header = (
		<ToolBar>
			<FilterList>
				<Filter items={months} icon={<CalendarIcon />} />				
				<Filter
					label="Офис"
					items={transformDictionaryValues(offices)}
					onChange={setFilter('office')} 
				/>
				<Filter
					label="Отдел"
					items={transformDictionaryValues(departments)}
					onChange={setFilter('department')} 
				/>
				<Filter
					label="Должность"
					items={transformDictionaryValues(professions)}
					onChange={setFilter('profession')}
				/>
			</FilterList>
			<ContextMenu iconVariant="horizontal">
				<ContextMenu.Item />
			</ContextMenu>
		</ToolBar>
	)

	const getSortKey = (key: string) => {
		if (key === 'name' || key === 'hours') {
			return key
		}
	
		return 'hourlySalary'
	}
	
				
	const table = (
		<Table
			loading={state}
			columns={columns}
			data={salaryList.map((salaryData) => {
				const workedOut = getWorkersSalary(salaryData.salary)
				const incomeTax = getWorkersIncomeTax(workedOut)
				const pensionInsurance = getWorkersPensionInsurance(workedOut)
				const socialInsurance = getWorkersSocialInsurance(workedOut)
				const healthInsurance = getWorkersHealthInsurance(workedOut)
				const accidentInsurance = getWorkersAccidentInsurance(workedOut)

				return {
					name: salaryData.name,
					hours: salaryData.salary.hours,
					workedOut,
					incomeTax,
					pensionInsurance,
					socialInsurance,
					healthInsurance,
					accidentInsurance,
					total: workedOut - (
						incomeTax + pensionInsurance + socialInsurance + healthInsurance + accidentInsurance
					)
				} 
			})}
			onSortChanged={(sortValue) => {
				if(!sortValue) return 

				fetchSalaryList({ 
					sortKey: getSortKey(sortValue[0]), 
					sortValue: sortValue[1] 
				})
			}}
		/>
	)

	return (
		<ItemTable
			items={salaryList}
			render={table}
			header={header} 
		/>
	)
}

export default observer(SalaryContainer)
