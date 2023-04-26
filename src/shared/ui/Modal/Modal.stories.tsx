import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Modal } from './Modal'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
    isOpen: true,
    children: 'Text1 ftsetsets fsf sdfsd flk j;lk j;lk j;l j; j; klj ;lj ;l ftsetsets fsf sdfsd flk j;lk j;lk j;l j; j; klj ;lj ;l'
}

export const Dark = Template.bind({})
Dark.args = {
    isOpen: true,
    children: 'Text1 ftsetsets fsf sdfsd flk j;lk j;lk j;l j; j; klj ;lj ;l ftsetsets fsf sdfsd flk j;lk j;lk j;l j; j; klj ;lj ;l'
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
