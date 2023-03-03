import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import './shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { StoreProvider } from 'app/providers/StoreProvider'

const root = createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <StoreProvider>

                <ErrorBoundary>
                    <ThemeProvider>
                        <App/>
                    </ThemeProvider>
                </ErrorBoundary>
            </StoreProvider>
        </BrowserRouter>
    </React.StrictMode>
)
