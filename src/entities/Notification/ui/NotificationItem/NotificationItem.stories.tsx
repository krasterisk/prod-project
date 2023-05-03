import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NotificationItem } from './NotificationItem'
import { Notification } from '../../model/types/notification'

const item = {
    id: '1',
    title: 'У вас новое сообщение',
    description: 'Создать статью',
    href: 'https://krasterisk.ru',
    userId: '1'
} as Notification

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof NotificationItem>

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />

export const Normal = Template.bind({})
Normal.args = {
    item
}
