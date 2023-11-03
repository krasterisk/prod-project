import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Contexts } from './Contexts'

export default {
  title: 'shared/ContextsSelect',
  component: Contexts,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Contexts>

const Template: ComponentStory<typeof Contexts> = (args) => <Contexts />

export const Normal = Template.bind({})
Normal.args = {}
