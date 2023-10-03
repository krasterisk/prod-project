import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointHeader } from './EndpointHeader'

export default {
  title: 'shared/EndpointHeader',
  component: EndpointHeader,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointHeader>

const Template: ComponentStory<typeof EndpointHeader> = (args) => <EndpointHeader {...args} />

export const Normal = Template.bind({})
Normal.args = {}
