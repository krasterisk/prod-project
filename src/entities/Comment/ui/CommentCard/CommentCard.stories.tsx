import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CommentCard } from './CommentCard'
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator'

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

export const Normal = Template.bind({})
Normal.args = {
    comment: {
        id: '1',
        text: 'sample text',
        user: {
            id: '1',
            username: 'Username'
        }
    }
}
Normal.decorators = [RouterDecorator]

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true
}
