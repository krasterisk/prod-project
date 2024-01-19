import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProvisioningEditCard } from './ProvisioningEditCard'

export default {
  title: 'shared/ProvisioningEditCard',
  component: ProvisioningEditCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProvisioningEditCard>

const Template: ComponentStory<typeof ProvisioningEditCard> = (args) => <ProvisioningEditCard {...args} />

export const Normal = Template.bind({})
Normal.args = {}
