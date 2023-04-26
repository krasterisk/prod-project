import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Country } from '../../../entities/Country'
import { Currency } from '../../../entities/Currency'

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage/>

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({
    profileForm: {
        form: {
            firstname: 'First',
            lastname: 'Last',
            age: 20,
            username: 'Username',
            email: 'mail@email.com',
            country: Country.Russia,
            currency: Currency.RUB
        }
    }
})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profileForm: {
            form: {
                firstname: 'First',
                lastname: 'Last',
                age: 20,
                username: 'Username',
                email: 'mail@email.com',
                country: Country.Russia,
                currency: Currency.RUB
            }
        }
    })]

export const Readonly = Template.bind({})
Readonly.args = {}
Readonly.decorators = [
    StoreDecorator({
        profileForm: {
            form: {
                firstname: 'First',
                lastname: 'Last',
                age: 20,
                username: 'Username',
                email: 'mail@email.com',
                country: Country.Russia,
                currency: Currency.RUB
            },
            readonly: true
        }
    })]

// export const PageIsLoading = Template.bind({})
// PageIsLoading.args = {}
// PageIsLoading.decorators = [StoreDecorator({
//     profileForm: {
//         data: {
//             firstname: 'Ivan',
//             lastname: 'Ivanov'
//         },
//         isLoading: true
//     }
// })]
//
// export const PageReadonly = Template.bind({})
// PageReadonly.args = {}
// PageReadonly.decorators = [StoreDecorator({
//     profileForm: {
//         data: {
//             firstname: 'Ivan',
//             lastname: 'Ivanov'
//         },
//         readonly: true
//     }
// })]
