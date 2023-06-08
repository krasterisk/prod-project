import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { NotificationList } from './NotificationList'
import { StoreDecorator } from '../../../../shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'У вас новое сообщение 1',
          description: 'Создать статью 1',
          userId: '1'
        },
        {
          id: '2',
          title: 'У вас новое сообщение 2',
          description: 'Создать статью 2',
          userId: '1'
        },
        {
          id: '3',
          title: 'У вас новое сообщение 3',
          description: 'Нажмите, чтобы перейти на сайт',
          href: 'https://krasterisk.ru',
          userId: '1'
        }
      ]
    }
  ]
}
