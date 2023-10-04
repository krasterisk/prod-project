import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointCreateCard } from './EndpointCreateCard'

export default {
  title: 'shared/EndpointCreateCard',
  component: EndpointCreateCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointCreateCard>

const Template: ComponentStory<typeof EndpointCreateCard> = (args) => <EndpointCreateCard {...args} />

export const Normal = Template.bind({})
Normal.args = {}
