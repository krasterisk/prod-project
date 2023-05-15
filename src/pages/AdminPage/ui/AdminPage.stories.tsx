import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import AdminPage from './AdminPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'pages/AdminPage',
    component: AdminPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof AdminPage>

// const Template: ComponentStory<typeof AdminPage> = () => <AdminPage />

// export const Normal = Template.bind({})
// Normal.args = {}
// Normal.decorators = [StoreDecorator({})]
