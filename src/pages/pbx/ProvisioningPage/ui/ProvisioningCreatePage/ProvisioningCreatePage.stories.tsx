import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProvisioningCreatePage } from './ProvisioningCreatePage'

export default {
  title: 'shared/ProvisioningCreatePage',
  component: ProvisioningCreatePage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProvisioningCreatePage>

const Template: ComponentStory<typeof ProvisioningCreatePage> = (args) => <ProvisioningCreatePage />

export const Normal = Template.bind({})
Normal.args = {}
