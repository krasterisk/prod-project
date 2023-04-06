import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ManualSortSelector } from './ManualSortSelector'

export default {
    title: 'entities/Manual/ManualSortSelector',
    component: ManualSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ManualSortSelector>

const Template: ComponentStory<typeof ManualSortSelector> = (args) => <ManualSortSelector {...args} />

export const Normal = Template.bind({})
Normal.args = {}
