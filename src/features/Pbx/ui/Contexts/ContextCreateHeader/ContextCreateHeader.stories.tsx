import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContextCreateHeader } from './ContextCreateHeader'

export default {
  title: 'shared/ContextCreateHeader',
  component: ContextCreateHeader,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ContextCreateHeader>

const Template: ComponentStory<typeof ContextCreateHeader> = (args) => <ContextCreateHeader {...args} />

export const Normal = Template.bind({})
Normal.args = {}
