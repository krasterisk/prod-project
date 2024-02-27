import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointMenu } from './EndpointMenu'

export default {
  title: 'shared/EndpointMenu',
  component: EndpointMenu,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointMenu>

const Template: ComponentStory<typeof EndpointMenu> = (args) => <EndpointMenu {...args} />

export const Normal = Template.bind({})
Normal.args = {}
