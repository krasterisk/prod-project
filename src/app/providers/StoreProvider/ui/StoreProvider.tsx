import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore, StateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from '@reduxjs/toolkit'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState
    } = props

    const store = createReduxStore(initialState as StateSchema)
    //   store.subscribe(() => { console.log(store.getState()) })

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
