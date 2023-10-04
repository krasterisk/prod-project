import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointCreate } from './EndpointCreate'

export default {
  title: 'shared/EndpointEditPage',
  component: EndpointCreate,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointCreate>

const Template: ComponentStory<typeof EndpointCreate> = (args) => <EndpointCreate {...args} />

export const Normal = Template.bind({})
Normal.args = {}
