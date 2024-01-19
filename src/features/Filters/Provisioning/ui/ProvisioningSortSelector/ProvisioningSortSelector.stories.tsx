import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProvisioningSortSelector } from './ProvisioningSortSelector'

export default {
  title: 'shared/ProvisioningSortSelector',
  component: ProvisioningSortSelector,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProvisioningSortSelector>

const Template: ComponentStory<typeof ProvisioningSortSelector> = (args) => <ProvisioningSortSelector {...args} />

export const Normal = Template.bind({})
Normal.args = {}
