import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ManualBlockCodeComponent } from './ManualBlockCodeComponent'

export default {
    title: 'shared/ManualBlockCodeComponent',
    component: ManualBlockCodeComponent,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ManualBlockCodeComponent>

const Template: ComponentStory<typeof ManualBlockCodeComponent> = (args) => <ManualBlockCodeComponent {...args} />

export const Normal = Template.bind({})
Normal.args = {}
