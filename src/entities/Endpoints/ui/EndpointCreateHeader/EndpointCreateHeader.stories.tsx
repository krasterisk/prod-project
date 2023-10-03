import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointCreateHeader } from './EndpointCreateHeader'

export default {
  title: 'shared/EndpointCreateHeader',
  component: EndpointCreateHeader,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointCreateHeader>

const Template: ComponentStory<typeof EndpointCreateHeader> = (args) => <EndpointCreateHeader {...args} />

export const Normal = Template.bind({})
Normal.args = {}
