import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContextSelect } from './ContextSelect'

export default {
  title: 'shared/ContextSelect',
  component: ContextSelect,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ContextSelect>

const Template: ComponentStory<typeof ContextSelect> = (args) => <ContextSelect {...args} />

export const Normal = Template.bind({})
Normal.args = {}
