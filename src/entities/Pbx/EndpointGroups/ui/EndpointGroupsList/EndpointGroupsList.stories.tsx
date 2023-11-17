import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointGroupsList } from './EndpointGroupsList'

export default {
  title: 'shared/EndpointGroupsList',
  component: EndpointGroupsList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointGroupsList>

const Template: ComponentStory<typeof EndpointGroupsList> = (args) => <EndpointGroupsList {...args} />

export const Normal = Template.bind({})
Normal.args = {}
