import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContextsListPage } from './ContextsListPage'

export default {
  title: 'shared/ContextsListPage',
  component: ContextsListPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ContextsListPage>

const Template: ComponentStory<typeof ContextsListPage> = (args) => <ContextsListPage />

export const Normal = Template.bind({})
Normal.args = {}
