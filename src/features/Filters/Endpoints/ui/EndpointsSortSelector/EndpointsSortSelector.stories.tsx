import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointsSortSelector } from './EndpointsSortSelector'

export default {
  title: 'shared/EndpointsSortSelector',
  component: EndpointsSortSelector,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointsSortSelector>

const Template: ComponentStory<typeof EndpointsSortSelector> = (args) => <EndpointsSortSelector {...args} />

export const Normal = Template.bind({})
Normal.args = {}
