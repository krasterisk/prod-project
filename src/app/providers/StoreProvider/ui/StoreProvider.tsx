import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReactStore, StateSchema } from 'app/providers/StoreProvider'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: StateSchema
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState
    } = props

    const store = createReactStore(initialState)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
