import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContextCard } from './ContextCard'

export default {
  title: 'shared/ContextCard',
  component: ContextCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ContextCard>

const Template: ComponentStory<typeof ContextCard> = (args) => <ContextCard {...args} />

export const Normal = Template.bind({})
Normal.args = {}
