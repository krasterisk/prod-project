import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointEditCard } from './EndpointEditCard'

export default {
  title: 'shared/EndpointEditCard',
  component: EndpointEditCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointEditCard>

const Template: ComponentStory<typeof EndpointEditCard> = (args) => <EndpointEditCard {...args} />

export const Normal = Template.bind({})
Normal.args = {}
