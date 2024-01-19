import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProvisioningItem } from './ProvisioningItem'

export default {
  title: 'shared/ProvisioningItem',
  component: ProvisioningItem,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProvisioningItem>

const Template: ComponentStory<typeof ProvisioningItem> = (args) => <ProvisioningItem {...args} />

export const Normal = Template.bind({})
Normal.args = {}
