import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ManualEditPage from './ManualEditPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator'

export default {
  title: 'pages/ManualEditPage/ManualEditPage',
  component: ManualEditPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ManualEditPage>

const Template: ComponentStory<typeof ManualEditPage> = (args) => <ManualEditPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [
  StoreDecorator({}),
  RouterDecorator
]
