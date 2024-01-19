import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProvisioningEditPage } from './ProvisioningEditPage'

export default {
  title: 'shared/ProvisioningEditPage',
  component: ProvisioningEditPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProvisioningEditPage>

const Template: ComponentStory<typeof ProvisioningEditPage> = (args) => <ProvisioningEditPage />

export const Normal = Template.bind({})
Normal.args = {}
