import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ManualDetailsPageHeader } from './ManualDetailsPageHeader'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'pages/ManualDetailsPage/ManualDetailsPageHeader',
    component: ManualDetailsPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ManualDetailsPageHeader>

const Template: ComponentStory<typeof ManualDetailsPageHeader> = (args) => <ManualDetailsPageHeader {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
