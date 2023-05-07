import { screen } from '@testing-library/react'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { EditableProfileCard } from './EditableProfileCard'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { profileReducer } from '../../model/slice/profileSlice'
import userEvent from '@testing-library/user-event'
import { $api } from '@/shared/api/api'
import { Profile } from '../../../../entities/Profile'

const profile: Profile = {
    id: '1',
    firstname: 'First',
    lastname: 'Last',
    age: 20,
    username: 'Username',
    email: 'mail@email.com',
    country: Country.Russia,
    currency: Currency.RUB
}

const options = {
    initialState: {
        profileForm: {
            readonly: true,
            data: profile,
            form: profile,
            isLoading: false
        },
        user: {
            authData: {
                id: '1',
                username: 'admin',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgxMDI0MjU1LCJleHAiOjE2ODExMTA2NTV9.htph5FWWmr_MEU05mr1bV4VprhYpn_jRfbkXD1eNtuI'
            }
        }
    },
    asyncReducers: {
        profileForm: profileReducer
    }
}

describe('features/EditableProfileCard', () => {
    test('Must showing cancel button', async () => {
        componentRender(<EditableProfileCard id={'1'} />, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument()
    })

    test('Backing value by Cancel Edit', async () => {
        componentRender(<EditableProfileCard id={'1'} />, options)
        // Нажимаем кнопку редактировать
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
        // Очищаем инпуты
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'))
        await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'))
        // Вставляем другие данные
        await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'new_firstname')
        await userEvent.type(screen.getByTestId('ProfileCard.Lastname'), 'new_lastname')

        // Проверяем, что новые значения находятся в инпутах
        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('new_firstname')
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('new_lastname')
        // Нажимаем кнопку отмена
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'))
        // Проверяем, что значения вернулись
        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('First')
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('Last')
    })

    test('Validation test', async () => {
        componentRender(<EditableProfileCard id={'1'} />, options)
        // Нажимаем кнопку редактировать
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
        // Очищаем инпут
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'))
        // Нажимаем кнопку сохранения
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))
        // Проверяем, что есть в DOM есть элемент с ошибкой
        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()
    })
    test('Correct save', async () => {
        // Мокаем метод пут инстанса апи
        const mockPutReq = jest.spyOn($api, 'put')
        componentRender(<EditableProfileCard id={'1'} />, options)
        // Нажимаем кнопку редактировать
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
        // Вводим данные в инпут
        await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'new_firstname')
        // Нажимаем кнопку сохранения
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))
        // Проверяем, что метод вызвался
        expect(mockPutReq).toHaveBeenCalled()
    })
})
