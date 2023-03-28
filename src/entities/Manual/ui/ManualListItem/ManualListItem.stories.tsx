import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ManualListItem } from './ManualListItem'

export default {
    title: 'shared/ManualListItem',
    component: ManualListItem,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ManualListItem>

const Template: ComponentStory<typeof ManualListItem> = (args) => <ManualListItem {...args} />

export const Normal = Template.bind({})
Normal.args = {}
