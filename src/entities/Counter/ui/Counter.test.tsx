import { screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { Counter } from './Counter'
import { userEvent } from '@storybook/testing-library'

describe('Counter', () => {
    test('test render', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        })
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    })

    test('decrement btn click', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        })
        userEvent.click(screen.getByTestId('decrement-btn'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('9')
    })

    test('increment btn click', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        })
        userEvent.click(screen.getByTestId('increment-btn'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    })

    test('plus5 btn click', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        })
        userEvent.click(screen.getByTestId('plus5-btn'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('15')
    })
})
