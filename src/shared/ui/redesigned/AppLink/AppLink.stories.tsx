import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AppLink } from './AppLink'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator'

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text',
  variant: 'primary'
}
Primary.decorators = [
  RouterDecorator
]

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  children: 'Text',
  variant: 'red'
}
PrimaryDark.decorators = [
  RouterDecorator,
  ThemeDecorator(Theme.DARK)
]
