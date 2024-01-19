import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProvisioningList } from './ProvisioningList'

export default {
  title: 'shared/ProvisioningList',
  component: ProvisioningList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProvisioningList>

const Template: ComponentStory<typeof ProvisioningList> = (args) => <ProvisioningList {...args} />

export const Normal = Template.bind({})
Normal.args = {}
