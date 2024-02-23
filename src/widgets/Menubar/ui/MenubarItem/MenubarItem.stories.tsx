import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MenubarItem } from './MenubarItem'

export default {
  title: 'shared/MenubarItem',
  component: MenubarItem,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof MenubarItem>

const Template: ComponentStory<typeof MenubarItem> = (args) => <MenubarItem {...args} />

export const Normal = Template.bind({})
Normal.args = {}
