import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContentViewSelector } from './ContentViewSelector'

export default {
  title: 'shared/ContentViewSelector',
  component: ContentViewSelector,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ContentViewSelector>

const Template: ComponentStory<typeof ContentViewSelector> = (args) => <ContentViewSelector {...args} />

export const Normal = Template.bind({})
Normal.args = {}
