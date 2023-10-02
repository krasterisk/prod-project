import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EndpointCreatePage } from './EndpointCreatePage'

export default {
  title: 'shared/EndpointEditPage',
  component: EndpointCreatePage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EndpointCreatePage>

const Template: ComponentStory<typeof EndpointCreatePage> = (args) => <EndpointCreatePage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
