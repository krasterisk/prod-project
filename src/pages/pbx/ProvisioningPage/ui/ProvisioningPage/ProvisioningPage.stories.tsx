import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProvisioningPage from './ProvisioningPage'

export default {
  title: 'shared/ProvisioningPage',
  component: ProvisioningPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProvisioningPage>

const Template: ComponentStory<typeof ProvisioningPage> = (args) => <ProvisioningPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
