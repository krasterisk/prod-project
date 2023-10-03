import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointCard } from './EndpointCard'

export default {
  title: 'shared/EndpointCard',
  component: EndpointCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointCard>

const Template: ComponentStory<typeof EndpointCard> = (args) => <EndpointCard {...args} />

export const Normal = Template.bind({})
Normal.args = {}
