import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ManualRecommendationsList } from './ManualRecommendationsList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Manual, ManualBlockTypes } from '@/entities/Manual'
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator'

const manual: Manual = {
  id: '1',
  createdAt: '2023-03-21',
  title: 'TEST ADMIN',
  subtitle: 'Testing',
  image: 'https://krasterisk.ru/logos/logo.svg',
  views: 1022,
  user: {
    id: '2',
    username: 'Ivan',
    avatar: 'https://krasterisk.ru/logos/logo.svg'
  },
  hashtags: [],
  blocks: [
    {
      id: '1',
      type: ManualBlockTypes.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        {
          id: '1',
          paragraph: 'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
          blockTextId: '1'
        },
        {
          id: '2',
          paragraph: 'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
          blockTextId: '1'
        }
      ]
    },
    {
      id: '2',
      type: ManualBlockTypes.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
    },
    {
      id: '3',
      type: ManualBlockTypes.CODE,
      code: '2<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
    },
    {
      id: '4',
      type: ManualBlockTypes.IMAGE,
      title: 'super image',
      src: 'https://krasterisk.ru/logos/logo.svg'
    },
    {
      id: '5',
      type: ManualBlockTypes.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        {
          id: '1',
          paragraph: 'Программа5, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
          blockTextId: '5'
        },
        {
          id: '2',
          paragraph: 'Программа6, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
          blockTextId: '5'
        }
      ]
    }
  ]
}

export default {
  title: 'features/ManualRecommendationsList',
  component: ManualRecommendationsList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ManualRecommendationsList>

const Template: ComponentStory<typeof ManualRecommendationsList> = (args) => <ManualRecommendationsList {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/manuals/recommendations`,
      method: 'GET',
      status: 200,
      response: [
        { ...manual, id: '1' },
        { ...manual, id: '2' },
        { ...manual, id: '3' }
      ]
    }
  ]
}
Normal.decorators = [StoreDecorator({}), RouterDecorator]
