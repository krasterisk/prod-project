import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointGroupsCard } from './EndpointGroupsCard'

export default {
  title: 'shared/EndpointGroupsCard',
  component: EndpointGroupsCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointGroupsCard>

const Template: ComponentStory<typeof EndpointGroupsCard> = (args) => <EndpointGroupsCard {...args} />

export const Normal = Template.bind({})
Normal.args = {}
