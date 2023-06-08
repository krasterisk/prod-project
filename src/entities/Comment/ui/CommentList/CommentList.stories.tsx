import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CommentList } from './CommentList'
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator'

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />

export const Normal = Template.bind({})
Normal.args = {
  comments: [
    {
      id: '1',
      text: 'sample text',
      user: {
        id: '1',
        username: 'Username'
      }
    },
    {
      id: '2',
      text: 'sample text2',
      user: {
        id: '2',
        username: 'Username2'
      }
    }
  ]
}
Normal.decorators = [RouterDecorator]

export const Loading = Template.bind({})
Loading.args = {
  comments: [],
  isLoading: true
}
