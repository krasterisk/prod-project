import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ManualListItemDeprecated } from './ManualListItemDeprecated'

export default {
  title: 'shared/ManualListItemDeprecated',
  component: ManualListItemDeprecated,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ManualListItemDeprecated>

const Template: ComponentStory<typeof ManualListItemDeprecated> = (args) => <ManualListItemDeprecated {...args} />

export const Normal = Template.bind({})
Normal.args = {}
