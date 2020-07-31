import React, { useEffect } from 'react'

import PropTypes from 'prop-types'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { actionWorkers, addTab, worker } from '../../actions'
import { withData, withHRMService } from '../../components/hoc'

import {
	getFilteredWorkers,
	getWorkerProfessions,
	getWorkerOffices,
	getWorkerDepartments,
	getWorker,
} from '../../selectors/workers'

import WorkerListItem from '../../components/worker-list-item'

import WorkerStatusPanel from '../../components/worker-status-panel'

import FilterList from '../../components/filter-list'
import Filter from '../../components/filter'
import { ToolBar, ToolBarGroupItem } from '../../components/tool-bar'
import Button from '../../components/button'
import WorkerContainer from '../worker-container'
import Grid from '../../components/grid'

const WorkerListContainer = ({
	filteredWorkers,
	openWorker,
	isWorker,
	addTab,
	workerProfessions,
	workerOffices,
	workerDepartments,
	setFilterOfficeValue,
	setFilterProfessionValue,
	setFilterDepartmentValue,
	match,
	filterOffice,
	filterProfession,
	filterDepartment,
}) => {
	useEffect(() => {
		match.params.id !== undefined && openWorker(match.params.id)
	}, [match.params.id])

	const columns = isWorker ? 1 : 2
	const workerDetails = isWorker && <WorkerContainer />
	const clazz = isWorker ? 'worker-list opened-worker' : 'worker-list'

	const workerList = filteredWorkers.map((worker) => {
		return (
  <WorkerListItem
    key={worker.id}
    item={worker}
    match={match}
    addTab={addTab}
  />
		)
	})

	const itemList =
		filteredWorkers.length === 0 ? (
  <p>По данным параметрам фильтрации не найдено результатов!</p>
		) : (
  <Grid columns={columns} gap="2em">
    {workerList}
  </Grid>
		)

	return (
  <>
    <div className={clazz}>
      <ToolBar>
        <FilterList>
          <Filter
            label="Должность"
            items={workerProfessions.concat('Все')}
            filter={setFilterProfessionValue}
            defaultValue={filterProfession}
          />
          <Filter
            label="Офис"
            items={workerOffices.concat('Все')}
            filter={setFilterOfficeValue}
            defaultValue={filterOffice}
          />
          <Filter
            label="Отдел"
            items={workerDepartments.concat('Все')}
            filter={setFilterDepartmentValue}
            defaultValue={filterDepartment}
          />
        </FilterList>
        <ToolBarGroupItem>
          <Button variant="outlined" color="purple">
            Выделить нескольких
          </Button>
        </ToolBarGroupItem>
      </ToolBar>
      <WorkerStatusPanel />
      {itemList}
    </div>
    {workerDetails}
  </>
	)
}

WorkerListContainer.propTypes = {
	filteredWorkers: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
	return {
		filterOffice: state.workerList.filterOffice,
		filterProfession: state.workerList.filterProfession,
		filterDepartment: state.workerList.filterDepartment,
		filteredWorkers: getFilteredWorkers(state),
		workerProfessions: getWorkerProfessions(state),
		workerOffices: getWorkerOffices(state),
		workerDepartments: getWorkerDepartments(state),
		isWorker: state.workerList.isWorker,
		loading: state.workerList.loading,
		error: state.workerList.error,
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	const { hrmService, history } = ownProps
	const {
		workersRequest,
		workersLoaded,
		workersError,
		openWorker,
		setFilterOfficeValue,
		setFilterProfessionValue,
		setFilterDepartmentValue,
	} = actionWorkers

	return {
		fetchWorkers: () => {
			dispatch(workersRequest())
			hrmService
				.getWorkers()
				.then((data) => dispatch(workersLoaded(data)))
				.catch((err) => dispatch(workersError(err)))
		},
		openWorker: (id) => {
			dispatch(openWorker())
			history.push(`/workers/${id}`)
		},
		addTab: (label, path, office, prevPage) => {
			dispatch(
				addTab({
					label,
					path,
					office,
					prevPage,
				})
			)
		},
		setFilterOfficeValue: (val) => dispatch(setFilterOfficeValue(val)),
		setFilterProfessionValue: (val) => dispatch(setFilterProfessionValue(val)),
		setFilterDepartmentValue: (val) => dispatch(setFilterDepartmentValue(val)),
	}
}

export default compose(
	withRouter,
	withHRMService(),
	connect(mapStateToProps, mapDispatchToProps),
	withData('fetchWorkers')
)(WorkerListContainer)
