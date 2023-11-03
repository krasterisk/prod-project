import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContextsList } from './ContextsList'

export default {
  title: 'shared/ContextsList',
  component: ContextsList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ContextsList>

const Template: ComponentStory<typeof ContextsList> = (args) => <ContextsList {...args} />

export const Normal = Template.bind({})
Normal.args = {}
