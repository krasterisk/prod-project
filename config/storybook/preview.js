import { Theme } from '@/shared/const/theme'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'lite', class: Theme.LIGHT, color: '#ffffff' },
            { name: 'dark', class: Theme.DARK, color: '#000000' },
            { name: 'purple', class: Theme.PURPLE, color: '#98623b' }
        ],
    },
}

// addDecorator(StyleDecorator)
// addDecorator(ThemeDecorator(Theme.LIGHT))
// addDecorator(RouteDecorator)
// addDecorator(SuspenseDecorator)
