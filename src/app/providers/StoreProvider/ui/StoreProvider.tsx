import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore, StateSchema } from 'app/providers/StoreProvider'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
        asyncReducers
    } = props

    const navigate = useNavigate()

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate
    )
    //   store.subscribe(() => { console.log(store.getState()) })

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
