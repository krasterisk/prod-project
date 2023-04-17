import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ManualPageFilters } from './ManualPageFilters'

export default {
    title: 'pages/Manual/ManualPageFilters',
    component: ManualPageFilters,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ManualPageFilters>

const Template: ComponentStory<typeof ManualPageFilters> = (args) => <ManualPageFilters {...args} />

export const Normal = Template.bind({})
Normal.args = {}
