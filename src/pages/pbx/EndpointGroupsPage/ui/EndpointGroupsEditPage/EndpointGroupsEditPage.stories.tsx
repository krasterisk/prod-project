import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointGroupsEditPage } from './EndpointGroupsEditPage'

export default {
  title: 'shared/EndpointGroupsEditPage',
  component: EndpointGroupsEditPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointGroupsEditPage>

const Template: ComponentStory<typeof EndpointGroupsEditPage> = (args) => <EndpointGroupsEditPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
