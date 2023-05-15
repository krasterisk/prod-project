import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink'
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
    theme: AppLinkTheme.PRIMARY
}
Primary.decorators = [
    RouterDecorator
]

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
}
PrimaryDark.decorators = [
    RouterDecorator,
    ThemeDecorator(Theme.DARK)
]

export const Secondary = Template.bind({})
Secondary.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY
}
Secondary.decorators = [
    RouterDecorator
]

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY
}
SecondaryDark.decorators = [
    RouterDecorator
]

SecondaryDark.decorators = [
    RouterDecorator,
    ThemeDecorator(Theme.DARK)
]

export const Red = Template.bind({})
Red.args = {
    children: 'Text',
    theme: AppLinkTheme.RED
}
Red.decorators = [
    RouterDecorator
]

export const RedDark = Template.bind({})
RedDark.args = {
    children: 'Text',
    theme: AppLinkTheme.RED
}
RedDark.decorators = [
    RouterDecorator,
    ThemeDecorator(Theme.DARK)
]
