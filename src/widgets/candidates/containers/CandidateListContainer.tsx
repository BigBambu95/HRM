import React, { useContext, useEffect } from 'react'
import { autorun } from 'mobx'
import { observer } from 'mobx-react-lite'
import { FilterList, ItemList, ToolBar } from '@shared/components'
import { StoreContext } from '@app/store/StoreContext'
import { CandidateListItem } from '@widgets/vacancies/components'

const CandidateListContainer = () => {
	const {
		candidatesStore: { candidates, state, filter, fetchCandidates },
	} = useContext(StoreContext)

	useEffect(() => {
		autorun(() => {
			fetchCandidates(filter)
		})
	}, [filter])

	const candidateList = candidates.map((candidate) => {
		return(
			<CandidateListItem key={candidate.id} candidate={candidate} />
		)
	})

	return (
		<>
			<ItemList
				items={candidateList}
				state={state}
				columns={4}
				header={(
					<ToolBar>
						<FilterList>
							{/* <Filter */}
							{/*	label="Должность" */}
							{/*	items={transformDictionaryValues(professions)} */}
							{/*	onChange={setFilter('profession')} */}
							{/* /> */}
							{/* <Filter */}
							{/*	 label="Офис" */}
							{/*	 items={transformDictionaryValues(offices)} */}
							{/*	 onChange={setFilter('office')} */}
							{/* /> */}
						</FilterList>
					</ToolBar>
				)}
			/>
		</>
	)
}

export default observer(CandidateListContainer)
