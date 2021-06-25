import React from 'react'
import Spinner from 'components/spinner'
import ErrorIndicator from 'components/error-indicator'
import { useSelector } from 'reducers'

const useLoadData = (data: any) => {
	const loading = useSelector((state) => state.workerList.loading)
	const error = useSelector((state) => state.workerList.error)

	const spinner = loading && <Spinner />
	const errorIndicator = error && <ErrorIndicator />
	const content = !(loading || error) && data

	return [content, spinner, errorIndicator]
}

export default useLoadData
