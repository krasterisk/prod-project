import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointGroupItem } from './EndpointGroupItem'

export default {
  title: 'shared/EndpointGroupsItem',
  component: EndpointGroupItem,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointGroupItem>

const Template: ComponentStory<typeof EndpointGroupItem> = (args) => <EndpointGroupItem {...args} />

export const Normal = Template.bind({})
Normal.args = {}
