import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Table } from './Table'

export default {
  title: 'shared/Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const Normal = Template.bind({})
Normal.args = {}
