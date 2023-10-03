import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CodecSelect } from './CodecSelect'

export default {
  title: 'shared/CodecSelect',
  component: CodecSelect,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CodecSelect>

const Template: ComponentStory<typeof CodecSelect> = (args) => <CodecSelect {...args} />

export const Normal = Template.bind({})
Normal.args = {}
