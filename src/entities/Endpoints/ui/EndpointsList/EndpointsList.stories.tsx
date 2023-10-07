import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointsList } from '../../index'

export default {
  title: 'shared/EndpointsList',
  component: EndpointsList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointsList>

const Template: ComponentStory<typeof EndpointsList> = (args) => <EndpointsList {...args} />

export const Normal = Template.bind({})
Normal.args = {}
