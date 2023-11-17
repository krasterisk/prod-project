import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointGroupsCreateHeader } from './EndpointGroupsCreateHeader'

export default {
  title: 'shared/EndpointGroupsCreateHeader',
  component: EndpointGroupsCreateHeader,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointGroupsCreateHeader>

const Template: ComponentStory<typeof EndpointGroupsCreateHeader> = (args) => <EndpointGroupsCreateHeader {...args} />

export const Normal = Template.bind({})
Normal.args = {}
