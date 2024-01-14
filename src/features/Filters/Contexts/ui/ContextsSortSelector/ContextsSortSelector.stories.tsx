import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContextsSortSelector } from './ContextsSortSelector'

export default {
  title: 'shared/ContextsSortSelector',
  component: ContextsSortSelector,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ContextsSortSelector>

const Template: ComponentStory<typeof ContextsSortSelector> = (args) => <ContextsSortSelector {...args} />

export const Normal = Template.bind({})
Normal.args = {}
