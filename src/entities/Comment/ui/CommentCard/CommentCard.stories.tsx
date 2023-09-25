import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CommentCard } from './CommentCard'
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator'
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator'

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

const normalArgs = {
  comment: {
    id: '1',
    text: 'sample text',
    user: {
      id: '1',
      username: 'Username'
    }
  }
}

export const Normal = Template.bind({})
Normal.args = normalArgs
Normal.decorators = [RouterDecorator]

export const NormalRedesigned = Template.bind({})
NormalRedesigned.args = normalArgs
NormalRedesigned.decorators = [
  RouterDecorator,
  FeaturesFlagsDecorator({ isAppRedesigned: true })
]

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true
}
