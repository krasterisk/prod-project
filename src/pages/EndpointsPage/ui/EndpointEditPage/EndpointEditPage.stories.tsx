import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointEditPage } from './EndpointEditPage'

export default {
  title: 'shared/EndpointEditPage',
  component: EndpointEditPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointEditPage>

const Template: ComponentStory<typeof EndpointEditPage> = (args) => <EndpointEditPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
