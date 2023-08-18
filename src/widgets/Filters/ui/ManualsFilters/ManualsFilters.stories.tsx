import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ManualsFilters } from './ManualsFilters'

export default {
  title: 'shared/ManualsFilters',
  component: ManualsFilters,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ManualsFilters>

const Template: ComponentStory<typeof ManualsFilters> = (args) => <ManualsFilters {...args} />

export const Normal = Template.bind({})
Normal.args = {}
