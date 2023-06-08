import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import LoginForm from './LoginForm'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [StoreDecorator({
  loginForm: { username: 'admin', password: '123' }
})]

export const PrimaryWithError = Template.bind({})
PrimaryWithError.args = {}
PrimaryWithError.decorators = [StoreDecorator({
  loginForm: { username: 'admin', password: '123', error: 'Wrong username or password!' }
})]

export const PrimaryLoading = Template.bind({})
PrimaryLoading.args = {}
PrimaryLoading.decorators = [StoreDecorator({
  loginForm: { username: 'admin', password: '123', isLoading: true }
})]
