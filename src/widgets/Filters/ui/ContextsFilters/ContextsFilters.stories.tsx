import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContextsFilters } from './ContextsFilters'

export default {
  title: 'shared/ContextsFilters',
  component: ContextsFilters,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ContextsFilters>

const Template: ComponentStory<typeof ContextsFilters> = (args) => <ContextsFilters {...args} />

export const Normal = Template.bind({})
Normal.args = {}
