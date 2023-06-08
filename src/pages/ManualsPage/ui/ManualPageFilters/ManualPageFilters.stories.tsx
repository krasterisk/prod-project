import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ManualPageFilters } from './ManualPageFilters'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'pages/ManualsPage/ManualPageFilters',
  component: ManualPageFilters,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ManualPageFilters>

const Template: ComponentStory<typeof ManualPageFilters> = (args) => <ManualPageFilters {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
