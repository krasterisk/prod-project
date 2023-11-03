import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointsListHeader } from './EndpointsListHeader'

export default {
  title: 'shared/EndpointsListHeader',
  component: EndpointsListHeader,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointsListHeader>

const Template: ComponentStory<typeof EndpointsListHeader> = (args) => <EndpointsListHeader {...args} />

export const Normal = Template.bind({})
Normal.args = {}
