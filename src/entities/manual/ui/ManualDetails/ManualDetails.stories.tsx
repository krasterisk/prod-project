import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ManualDetails } from './ManualDetails'

export default {
    title: 'shared/ManualDetails',
    component: ManualDetails,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ManualDetails>

const Template: ComponentStory<typeof ManualDetails> = (args) => <ManualDetails {...args} />

export const Normal = Template.bind({})
Normal.args = {}
