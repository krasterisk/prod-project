import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ManualInfiniteList } from './ManualInfiniteList'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'pages/ManualsPage/ManualInfiniteList',
    component: ManualInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ManualInfiniteList>

const Template: ComponentStory<typeof ManualInfiniteList> = (args) => <ManualInfiniteList {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
