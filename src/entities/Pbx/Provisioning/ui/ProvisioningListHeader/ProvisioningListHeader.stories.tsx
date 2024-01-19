import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProvisioningListHeader } from './ProvisioningListHeader'

export default {
  title: 'shared/ProvisioningListHeader',
  component: ProvisioningListHeader,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProvisioningListHeader>

const Template: ComponentStory<typeof ProvisioningListHeader> = (args) => <ProvisioningListHeader {...args} />

export const Normal = Template.bind({})
Normal.args = {}
