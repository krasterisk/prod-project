import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContextEditPage } from './ContextEditPage'

export default {
  title: 'shared/ContextEditPage',
  component: ContextEditPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ContextEditPage>

const Template: ComponentStory<typeof ContextEditPage> = (args) => <ContextEditPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
