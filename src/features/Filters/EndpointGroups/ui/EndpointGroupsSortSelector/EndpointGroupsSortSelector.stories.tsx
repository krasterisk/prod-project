import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointGroupsSortSelector } from './EndpointGroupsSortSelector'

export default {
  title: 'shared/ContextsSortSelector',
  component: EndpointGroupsSortSelector,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointGroupsSortSelector>

const Template: ComponentStory<typeof EndpointGroupsSortSelector> = (args) => <EndpointGroupsSortSelector {...args} />

export const Normal = Template.bind({})
Normal.args = {}
