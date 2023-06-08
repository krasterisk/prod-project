import { type ReactNode } from 'react'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18nTest from '@/shared/config/i18n/i18nTest'
import { MemoryRouter } from 'react-router-dom'
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { Theme } from '@/shared/const/theme'
// eslint-disable-next-line krasterisk-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider'
// eslint-disable-next-line krasterisk-plugin/layer-imports
import '@/app/styles/index.scss'

export interface ComponentRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  theme?: Theme
}

interface TestProviderProps {
  children: ReactNode
  options?: ComponentRenderOptions
}

export function TestProvider (props: TestProviderProps) {
  const {
    options = {},
    children
  } = props

  const {
    route = '/',
    initialState,
    asyncReducers,
    theme = Theme.LIGHT
  } = options

  return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
                <I18nextProvider i18n={i18nTest}>
                    <ThemeProvider initialTheme={theme}>
                        <div className={`app ${theme}`}>
                            {children}
                        </div>
                    </ThemeProvider>

                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
  )
}

export function componentRender (component: ReactNode, options: ComponentRenderOptions =
{
}
) {
  return render(<TestProvider options={options}>{component}</TestProvider>)
}
