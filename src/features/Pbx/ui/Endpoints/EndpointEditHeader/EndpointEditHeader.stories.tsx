import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointEditHeader } from './EndpointEditHeader'

export default {
  title: 'shared/EndpointEditHeader',
  component: EndpointEditHeader,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointEditHeader>

const Template: ComponentStory<typeof EndpointEditHeader> = (args) => <EndpointEditHeader {...args} />

export const Normal = Template.bind({})
Normal.args = {}
