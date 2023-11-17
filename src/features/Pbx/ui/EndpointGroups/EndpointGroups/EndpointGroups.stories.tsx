import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointGroups } from './EndpointGroups'

export default {
  title: 'shared/EndpointGroups',
  component: EndpointGroups,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointGroups>

const Template: ComponentStory<typeof EndpointGroups> = (args) => <EndpointGroups {...args} />

export const Normal = Template.bind({})
Normal.args = {}
