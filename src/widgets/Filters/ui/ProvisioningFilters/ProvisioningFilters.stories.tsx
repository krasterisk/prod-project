import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProvisioningFilters } from './ProvisioningFilters'

export default {
  title: 'shared/ProvisioningFilters',
  component: ProvisioningFilters,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProvisioningFilters>

const Template: ComponentStory<typeof ProvisioningFilters> = (args) => <ProvisioningFilters {...args} />

export const Normal = Template.bind({})
Normal.args = {}
