import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Menubar } from './Menubar'

export default {
  title: 'shared/Menubar',
  component: Menubar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Menubar>

const Template: ComponentStory<typeof Menubar> = (args) => <Menubar {...args} />

export const Normal = Template.bind({})
Normal.args = {}
