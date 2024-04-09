// кортеж это массив фиксированной длины
import { Reducer } from '@reduxjs/toolkit'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { FC, ReactNode, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducersList = {
    [keyOfReducer in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducersList
    removeAfterUnmount: boolean
    children: ReactNode
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { reducers, removeAfterUnmount, children } = props
    const store = useStore() as ReduxStoreWithManager
    const dispatch = useDispatch()

    useEffect(() => {
        Object.entries(reducers).forEach(([keyOfReducer, reducer]: ReducersListEntry) => {
            store.reducerManager.add(keyOfReducer, reducer)
            dispatch({ type: `@INIT ${keyOfReducer} reducer` })
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([keyOfReducer, reducer]: ReducersListEntry) => {
                    dispatch({ type: `@DESTROY ${keyOfReducer} reducer` })
                    store.reducerManager.remove(keyOfReducer)
                })
            }
        }
        // eslint-disable-next-line
    }, [])
    return <>{children}</>
}
