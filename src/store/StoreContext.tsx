import React, { createContext, FC } from 'react'
import { RootStoreModel } from './RootStore'

export const StoreContext = createContext<RootStoreModel>({} as RootStoreModel)

export type StoreComponent = FC<{
	store: ANY_MIGRATION_TYPE;
}>

export const StoreProvider: StoreComponent = ({
	store,
	children
}) => {
	return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}