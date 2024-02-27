import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MenubarItems } from './MenubarItems'

export default {
  title: 'shared/MenubarItem',
  component: MenubarItems,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof MenubarItems>

const Template: ComponentStory<typeof MenubarItems> = (args) => <MenubarItems {...args} />

export const Normal = Template.bind({})
Normal.args = {}
