import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ManualsPage from './ManualsPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator'
import { SuspenseDecorator } from '@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'

export default {
    title: 'pages/ManualsPage/ManualsPage',
    component: ManualsPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ManualsPage>

const Template: ComponentStory<typeof ManualsPage> = (args) => <ManualsPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [
    StoreDecorator({}),
    RouterDecorator,
    SuspenseDecorator
]
