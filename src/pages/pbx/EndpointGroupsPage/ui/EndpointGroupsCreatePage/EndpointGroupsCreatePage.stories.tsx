import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointGroupsCreatePage } from './EndpointGroupsCreatePage'

export default {
  title: 'shared/EndpointGroupsCreatePage',
  component: EndpointGroupsCreatePage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointGroupsCreatePage>

const Template: ComponentStory<typeof EndpointGroupsCreatePage> = (args) => <EndpointGroupsCreatePage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
