import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ManualBlockImageComponent } from './ManualBlockImageComponent'

export default {
    title: 'shared/ManualBlockImageComponent',
    component: ManualBlockImageComponent,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ManualBlockImageComponent>

const Template: ComponentStory<typeof ManualBlockImageComponent> = (args) => <ManualBlockImageComponent {...args} />

export const Normal = Template.bind({})
Normal.args = {}
