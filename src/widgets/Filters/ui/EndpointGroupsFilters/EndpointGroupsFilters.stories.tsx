import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointGroupsFilters } from './EndpointGroupsFilters'

export default {
  title: 'shared/EndpointGroupsFilters',
  component: EndpointGroupsFilters,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointGroupsFilters>

const Template: ComponentStory<typeof EndpointGroupsFilters> = (args) => <EndpointGroupsFilters {...args} />

export const Normal = Template.bind({})
Normal.args = {}
