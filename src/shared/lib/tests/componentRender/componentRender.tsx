import { type ReactNode } from 'react'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18nTest from '@/shared/config/i18n/i18nTest'
import { MemoryRouter } from 'react-router-dom'
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'

export interface ComponentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export function componentRender (component: ReactNode, options: ComponentRenderOptions = {}) {
    const {
        route = '/',
        initialState,
        asyncReducers
    } = options
    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
                <I18nextProvider i18n={i18nTest}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}
