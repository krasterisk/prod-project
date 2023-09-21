import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AdditionInfo } from './AdditionInfo'

export default {
  title: 'shared/AdditionInfo',
  component: AdditionInfo,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AdditionInfo>

const Template: ComponentStory<typeof AdditionInfo> = (args) => <AdditionInfo {...args} />

export const Normal = Template.bind({})
Normal.args = {}
