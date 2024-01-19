import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProvisioningCreateHeader } from './ProvisioningCreateHeader'

export default {
  title: 'shared/ProvisioningCreateHeader',
  component: ProvisioningCreateHeader,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProvisioningCreateHeader>

const Template: ComponentStory<typeof ProvisioningCreateHeader> = (args) => <ProvisioningCreateHeader {...args} />

export const Normal = Template.bind({})
Normal.args = {}
