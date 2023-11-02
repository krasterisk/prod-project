import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Contexts } from './Contexts'

export default {
  title: 'shared/Contexts',
  component: Contexts,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Contexts>

const Template: ComponentStory<typeof Contexts> = (args) => <Contexts />

export const Normal = Template.bind({})
Normal.args = {}
