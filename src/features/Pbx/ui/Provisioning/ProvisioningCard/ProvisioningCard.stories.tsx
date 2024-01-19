import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProvisioningCard } from './ProvisioningCard'

export default {
  title: 'shared/ProvisioningCard',
  component: ProvisioningCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProvisioningCard>

const Template: ComponentStory<typeof ProvisioningCard> = (args) => <ProvisioningCard {...args} />

export const Normal = Template.bind({})
Normal.args = {}
