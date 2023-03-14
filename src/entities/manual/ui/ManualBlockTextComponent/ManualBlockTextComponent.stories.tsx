import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ManualBlockTextComponent } from './ManualBlockTextComponent'

export default {
    title: 'shared/ManualBlockTextComponent',
    component: ManualBlockTextComponent,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ManualBlockTextComponent>

const Template: ComponentStory<typeof ManualBlockTextComponent> = (args) => <ManualBlockTextComponent {...args} />

export const Normal = Template.bind({})
Normal.args = {}
