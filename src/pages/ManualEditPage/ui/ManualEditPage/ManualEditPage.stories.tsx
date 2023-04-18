import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ManualEditPage from './ManualEditPage'

export default {
    title: 'pages/ManualEditPage/ManualEditPage',
    component: ManualEditPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ManualEditPage>

const Template: ComponentStory<typeof ManualEditPage> = (args) => <ManualEditPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
