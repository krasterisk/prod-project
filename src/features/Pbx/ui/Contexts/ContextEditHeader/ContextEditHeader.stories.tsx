import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContextEditHeader } from './ContextEditHeader'

export default {
  title: 'shared/ContextEditHeader',
  component: ContextEditHeader,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ContextEditHeader>

const Template: ComponentStory<typeof ContextEditHeader> = (args) => <ContextEditHeader {...args} />

export const Normal = Template.bind({})
Normal.args = {}
