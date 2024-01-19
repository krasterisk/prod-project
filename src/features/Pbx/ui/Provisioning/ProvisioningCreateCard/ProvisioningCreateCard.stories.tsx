import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProvisioningCreateCard } from './ProvisioningCreateCard'

export default {
  title: 'shared/ProvisioningCreateCard',
  component: ProvisioningCreateCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProvisioningCreateCard>

const Template: ComponentStory<typeof ProvisioningCreateCard> = (args) => <ProvisioningCreateCard {...args} />

export const Normal = Template.bind({})
Normal.args = {}
