import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ManualListItemRedesigned } from './ManualListItemRedesigned'

export default {
  title: 'shared/ManualListItemRedesigned',
  component: ManualListItemRedesigned,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ManualListItemRedesigned>

const Template: ComponentStory<typeof ManualListItemRedesigned> = (args) => <ManualListItemRedesigned {...args} />

export const Normal = Template.bind({})
Normal.args = {}
