import React, { useState, useEffect, useContext, Key } from 'react'
import { autorun } from 'mobx'
import { observer } from 'mobx-react-lite'
import { Button, Filter, ToolBar, FilterList, ContextMenu, ItemList } from '@shared/components'
import { transformDictionaryValues } from '@shared/helpers/dictionaries'
import { StoreContext } from '@app/store/StoreContext'
import useDictionary from '@shared/hooks'
import { PencilIcon, RemoveBasketIcon } from '@shared/components/icons'
import { VacancyForm, VacancyListItem } from '../components'

const VacancyListContainer = () => {
	const {
		tabsStore: { addTab },
		vacanciesStore: { 
			state, 
			fetchVacancies, 
			filter, 
			setFilter: setFilterAction, 
			vacancies, 
			removeVacancy, 
			addVacancy 
		},
	} = useContext(StoreContext)

	// Local state
	const [formVisible, setFormVisible] = useState(false)
	const [formMode, setFormMode] = useState<'new' | 'edit'>('new')
	const [currentVacancyId, setCurrentVacancyId] = useState<Key | null>(null)

	const [professions, offices] = useDictionary()

	useEffect(() => {
		autorun(() => {
			fetchVacancies(filter)
		})
	}, [filter])

	const openedFormHandler = (mode: 'new' | 'edit') => {
		setFormMode(mode)
		setFormVisible(true)
	}

	const renderContextMenu = (id: Key) => (
		<ContextMenu>
			<ContextMenu.Item
				onClick={() => {
					openedFormHandler('edit')
					setCurrentVacancyId(id)
				}}
				icon={<PencilIcon width={16} height={16} />}
			>
				Изменить
			</ContextMenu.Item>
			<ContextMenu.Item onClick={() => removeVacancy(id)} icon={<RemoveBasketIcon width={16} height={16} />}>
				Удалить
			</ContextMenu.Item>
		</ContextMenu>
	)

	const vacancyList = vacancies.map((vacancy: Vacancy) => (
		<VacancyListItem
			key={vacancy.id}
			vacancy={vacancy}
			offices={offices}
			professions={professions}
			addTab={addTab}
			renderContextMenu={renderContextMenu}
		/>
	))

	const setFilter =
		(name: string) =>
			({ id, value }: { id: React.Key, value: string }) =>
				setFilterAction({ name, value: value !== 'Все' ? id.toString() : value })

	return (
		<>
			<ItemList
				state={state}
				items={vacancyList}
				header={
					<ToolBar>
						<FilterList>
							<Filter
								label="Должность"
								items={transformDictionaryValues(professions)}
								onChange={setFilter('profession')}
							/>
							<Filter
								label="Офис"
								items={transformDictionaryValues(offices)}
								onChange={setFilter('office')} 
							/>
						</FilterList>
						<Button onClick={() => openedFormHandler('new')}>Добавить вакансию</Button>
					</ToolBar>
				}
			/>

			<VacancyForm
				mode={formMode}
				vacancy={vacancies.find((vacancy) => vacancy.id === currentVacancyId)}
				onSubmit={addVacancy}
				visible={formVisible}
				onCancel={() => setFormVisible(false)}
				professions={professions}
				offices={offices}
			/>
		</>
	)
}

export default observer(VacancyListContainer)
