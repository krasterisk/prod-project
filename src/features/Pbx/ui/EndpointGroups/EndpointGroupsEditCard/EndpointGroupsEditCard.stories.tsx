import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointGroupsEditCard } from './EndpointGroupsEditCard'

export default {
  title: 'shared/EndpointGroupsEditCard',
  component: EndpointGroupsEditCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointGroupsEditCard>

const Template: ComponentStory<typeof EndpointGroupsEditCard> = (args) => <EndpointGroupsEditCard {...args} />

export const Normal = Template.bind({})
Normal.args = {}
