import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointGroupsListPage } from './EndpointGroupsListPage'

export default {
  title: 'shared/EndpointGroupsListPage',
  component: EndpointGroupsListPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointGroupsListPage>

const Template: ComponentStory<typeof EndpointGroupsListPage> = (args) => <EndpointGroupsListPage />

export const Normal = Template.bind({})
Normal.args = {}
