import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointGroupsListHeader } from './EndpointGroupsListHeader'

export default {
  title: 'shared/EndpointGroupsListHeader',
  component: EndpointGroupsListHeader,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointGroupsListHeader>

const Template: ComponentStory<typeof EndpointGroupsListHeader> = (args) => <EndpointGroupsListHeader {...args} />

export const Normal = Template.bind({})
Normal.args = {}
