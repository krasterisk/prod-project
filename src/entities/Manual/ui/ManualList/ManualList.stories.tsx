import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ManualList } from './ManualList'

export default {
    title: 'shared/ManualList',
    component: ManualList,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ManualList>

const Template: ComponentStory<typeof ManualList> = (args) => <ManualList {...args} />

export const Normal = Template.bind({})
Normal.args = {}
