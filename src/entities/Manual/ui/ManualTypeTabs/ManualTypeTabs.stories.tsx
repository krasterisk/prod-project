import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ManualTypeTabs } from './ManualTypeTabs'

export default {
    title: 'shared/ManualTypeTabs',
    component: ManualTypeTabs,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ManualTypeTabs>

const Template: ComponentStory<typeof ManualTypeTabs> = (args) => <ManualTypeTabs {...args} />

export const Normal = Template.bind({})
Normal.args = {}
