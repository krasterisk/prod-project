import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointsFilters } from './EndpointsFilters'

export default {
  title: 'shared/EndpointsFilters',
  component: EndpointsFilters,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointsFilters>

const Template: ComponentStory<typeof EndpointsFilters> = (args) => <EndpointsFilters {...args} />

export const Normal = Template.bind({})
Normal.args = {}
