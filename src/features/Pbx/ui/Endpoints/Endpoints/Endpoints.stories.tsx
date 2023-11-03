import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Endpoints } from './Endpoints'

export default {
  title: 'shared/Endpoints',
  component: Endpoints,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Endpoints>

const Template: ComponentStory<typeof Endpoints> = (args) => <Endpoints />

export const Normal = Template.bind({})
Normal.args = {}
