import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointGroupsEditHeader } from './EndpointGroupsEditHeader'

export default {
  title: 'shared/EndpointGroupsEditHeader',
  component: EndpointGroupsEditHeader,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointGroupsEditHeader>

const Template: ComponentStory<typeof EndpointGroupsEditHeader> = (args) => <EndpointGroupsEditHeader {...args} />

export const Normal = Template.bind({})
Normal.args = {}
