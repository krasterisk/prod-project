import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ManualDetailsComments } from './ManualDetailsComments'

export default {
    title: 'shared/ManualDetailsComments',
    component: ManualDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ManualDetailsComments>

const Template: ComponentStory<typeof ManualDetailsComments> = (args) => <ManualDetailsComments {...args} />

export const Normal = Template.bind({})
Normal.args = {}
