import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContextCreateCard } from './ContextCreateCard'

export default {
  title: 'shared/ContextCreateCard',
  component: ContextCreateCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ContextCreateCard>

const Template: ComponentStory<typeof ContextCreateCard> = (args) => <ContextCreateCard {...args} />

export const Normal = Template.bind({})
Normal.args = {}
