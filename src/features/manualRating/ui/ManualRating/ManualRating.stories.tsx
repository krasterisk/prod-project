import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ManualRating from './ManualRating'

export default {
    title: 'shared/ManualRating',
    component: ManualRating,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ManualRating>

const Template: ComponentStory<typeof ManualRating> = (args) => <ManualRating {...args} />

export const Normal = Template.bind({})
Normal.args = {}
