import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProvisioningEditHeader } from './ProvisioningEditHeader'

export default {
  title: 'shared/ProvisioningEditHeader',
  component: ProvisioningEditHeader,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProvisioningEditHeader>

const Template: ComponentStory<typeof ProvisioningEditHeader> = (args) => <ProvisioningEditHeader {...args} />

export const Normal = Template.bind({})
Normal.args = {}
