import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContextItem } from './ContextItem'

export default {
  title: 'shared/ContextItem',
  component: ContextItem,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ContextItem>

const Template: ComponentStory<typeof ContextItem> = (args) => <ContextItem {...args} />

export const Normal = Template.bind({})
Normal.args = {}
