import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button, ThemeButton } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>

//
// interface ButtonProps {
//     primary?: boolean
//     backgroundColor?: string
//     size?: 'small' | 'medium' | 'large'
//     label: string
//     onClick?: () => void
// }

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Text'
}

export const Clear = Template.bind({})
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR
}

export const Outlined = Template.bind({})
Outlined.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE
}

export const OutlinedDark = Template.bind({})
OutlinedDark.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE
}
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)]
