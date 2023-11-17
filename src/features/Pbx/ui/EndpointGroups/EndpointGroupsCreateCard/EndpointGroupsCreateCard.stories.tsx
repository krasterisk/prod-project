import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointGroupsCreateCard } from './EndpointGroupsCreateCard'

export default {
  title: 'shared/EndpointGroupsCreateCard',
  component: EndpointGroupsCreateCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointGroupsCreateCard>

const Template: ComponentStory<typeof EndpointGroupsCreateCard> = (args) => <EndpointGroupsCreateCard {...args} />

export const Normal = Template.bind({})
Normal.args = {}
