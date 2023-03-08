import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Select } from './Select'

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'Sample label',
    options: [
        { value: '123', content: 'First' },
        { value: '123', content: 'Second' },
        { value: '123', content: 'third' }
    ]
}
