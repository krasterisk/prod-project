import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointItem } from './EndpointItem'

export default {
  title: 'shared/EndpointItem',
  component: EndpointItem,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointItem>

const Template: ComponentStory<typeof EndpointItem> = (args) => <EndpointItem {...args} />

export const Normal = Template.bind({})
Normal.args = {}
