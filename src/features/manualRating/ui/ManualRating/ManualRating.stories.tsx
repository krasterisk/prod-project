import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ManualRating from './ManualRating'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'features/ManualRating',
    component: ManualRating,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ManualRating>

const Template: ComponentStory<typeof ManualRating> = (args) => <ManualRating {...args} />

export const Normal = Template.bind({})
Normal.args = {
    manualId: '1'
}
Normal.decorators = [StoreDecorator({})]
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/rating?userId=1&postId=20`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 4
                }
            ]
        }
    ]
}

export const WithOutRate = Template.bind({})
WithOutRate.args = {
    manualId: '1'
}
WithOutRate.decorators = [StoreDecorator({})]
WithOutRate.parameters = {
    mockData: [
        {
            url: `${__API__}/rating?userId=1&postId=20`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 0
                }
            ]
        }
    ]
}
