import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContentTypeTabs } from './ContentTypeTabs'

export default {
  title: 'shared/ContentTypeTabs',
  component: ContentTypeTabs,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ContentTypeTabs>

const Template: ComponentStory<typeof ContentTypeTabs> = (args) => <ContentTypeTabs {...args} />

export const Normal = Template.bind({})
Normal.args = {}
