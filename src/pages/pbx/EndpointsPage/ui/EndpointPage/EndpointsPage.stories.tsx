import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { EndpointsPage } from './EndpointsPage'

export default {
  title: 'pages/AdminPage',
  component: EndpointsPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointsPage>

const Template: ComponentStory<typeof EndpointsPage> = () => <EndpointsPage />

export const Normal = Template.bind({})
Normal.args = {}
