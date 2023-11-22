import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContentList } from './ContentList'

export default {
  title: 'shared/ContentList',
  component: ContentList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ContentList>

const Template: ComponentStory<typeof ContentList> = (args) => <ContentList {...args} />

export const Normal = Template.bind({})
Normal.args = {}
