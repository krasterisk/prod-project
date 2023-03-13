import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ManualsPage from './ManualsPage'

export default {
    title: 'shared/ManualsPage',
    component: ManualsPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ManualsPage>

const Template: ComponentStory<typeof ManualsPage> = (args) => <ManualsPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
