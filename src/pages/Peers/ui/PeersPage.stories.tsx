import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import PeersPage from './PeersPage'

export default {
  title: 'pages/AdminPage',
  component: PeersPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof PeersPage>

const Template: ComponentStory<typeof PeersPage> = () => <PeersPage />

export const Normal = Template.bind({})
Normal.args = {}
