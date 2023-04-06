import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ManualViewSelector } from './ManualViewSelector'

export default {
    title: 'entities/Manual/ManualViewSelector',
    component: ManualViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ManualViewSelector>

const Template: ComponentStory<typeof ManualViewSelector> = (args) => <ManualViewSelector {...args} />

export const Normal = Template.bind({})
Normal.args = {}
