import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointEdit } from './EndpointEdit'

export default {
  title: 'shared/EndpointEditPage',
  component: EndpointEdit,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointEdit>

const Template: ComponentStory<typeof EndpointEdit> = (args) => <EndpointEdit {...args} />

export const Normal = Template.bind({})
Normal.args = {}
