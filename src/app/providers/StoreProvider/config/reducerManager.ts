import { AnyAction, Reducer, ReducersMapObject, combineReducers } from '@reduxjs/toolkit'
import { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema'

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
    const reducers = { ...initialReducers }

    let combinedReducer = combineReducers(reducers)

    let keysToRemove: StateSchemaKey[] = []
    // keysToRemove: Это массив, в котором хранятся ключи (имена) редукторов, которые нужно удалить.

    return {
        getReducerMap: () => reducers,
        // getReducerMap: Возвращает текущий набор редукторов.
        reduce: (state: StateSchema, action: AnyAction) => {
            // reduce: Принимает состояние (state) и действие (action) и применяет все редукторы к этому состоянию.

            if (keysToRemove.length > 0) {
                state = { ...state }
                keysToRemove.forEach((key) => {
                    delete state[key]
                })
                keysToRemove = []
            }

            return combinedReducer(state, action)
        },

        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return
            }
            // add: Добавляет новый редуктор к текущему списку редукторов.

            reducers[key] = reducer

            combinedReducer = combineReducers(reducers)
        },

        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return
            }
            // remove: Удаляет редуктор из текущего списка редукторов.

            delete reducers[key]

            keysToRemove.push(key)

            combinedReducer = combineReducers(reducers)
        },
    }
}
