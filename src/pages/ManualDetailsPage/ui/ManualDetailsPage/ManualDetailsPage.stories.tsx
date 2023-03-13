import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ManualDetailsPage from './ManualDetailsPage'

export default {
    title: 'shared/ManualDetailsPage',
    component: ManualDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ManualDetailsPage>

const Template: ComponentStory<typeof ManualDetailsPage> = (args) => <ManualDetailsPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
