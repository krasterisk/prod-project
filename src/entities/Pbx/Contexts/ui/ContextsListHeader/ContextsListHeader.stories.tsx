import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContextsListHeader } from './ContextsListHeader'

export default {
  title: 'shared/ContextsListHeader',
  component: ContextsListHeader,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ContextsListHeader>

const Template: ComponentStory<typeof ContextsListHeader> = (args) => <ContextsListHeader {...args} />

export const Normal = Template.bind({})
Normal.args = {}
