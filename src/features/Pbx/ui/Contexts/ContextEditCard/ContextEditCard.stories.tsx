import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContextEditCard } from './ContextEditCard'

export default {
  title: 'shared/ContextEditCard',
  component: ContextEditCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ContextEditCard>

const Template: ComponentStory<typeof ContextEditCard> = (args) => <ContextEditCard {...args} />

export const Normal = Template.bind({})
Normal.args = {}
