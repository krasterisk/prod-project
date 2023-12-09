import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointsContextTabs } from './EndpointsContextTabs'

export default {
  title: 'shared/EndpointsContextTabs',
  component: EndpointsContextTabs,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointsContextTabs>

const Template: ComponentStory<typeof EndpointsContextTabs> = (args) => <EndpointsContextTabs {...args} />

export const Normal = Template.bind({})
Normal.args = {}
