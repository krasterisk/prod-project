import { ReactNode, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider'
import { Reducer } from '@reduxjs/toolkit'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
  children: ReactNode
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const {
    children,
    reducers,
    removeAfterUnmount = true
  } = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap()
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounded = mountedReducers[name as StateSchemaKey]
      if (!mounded) {
        store.reducerManager.add(name as StateSchemaKey, reducer)
        dispatch({ type: `@INIT ${name} reducer` })
      }
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.remove(name as StateSchemaKey, reducer)
          dispatch({ type: `@DESTROY ${name} reducer` })
        })
      }
    }
    // @ts-next-lint
  }, [dispatch, reducers, removeAfterUnmount, store.reducerManager])

  return (
        <>
            {children}
        </>
  )
}
