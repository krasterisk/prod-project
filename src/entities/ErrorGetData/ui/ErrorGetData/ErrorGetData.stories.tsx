import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ErrorGetData } from './ErrorGetData'

export default {
  title: 'shared/ErrorGetData',
  component: ErrorGetData,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ErrorGetData>

const Template: ComponentStory<typeof ErrorGetData> = (args) => <ErrorGetData {...args} />

export const Normal = Template.bind({})
Normal.args = {}
