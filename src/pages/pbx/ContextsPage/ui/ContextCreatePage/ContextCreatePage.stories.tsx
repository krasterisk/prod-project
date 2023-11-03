import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContextCreatePage } from './ContextCreatePage'

export default {
  title: 'shared/ContextCreatePage',
  component: ContextCreatePage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ContextCreatePage>

const Template: ComponentStory<typeof ContextCreatePage> = (args) => <ContextCreatePage />

export const Normal = Template.bind({})
Normal.args = {}
