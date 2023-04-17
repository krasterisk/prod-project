import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ManualRecommendationsList } from './ManualRecommendationsList'

export default {
    title: 'features/ManualRecommendationsList',
    component: ManualRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ManualRecommendationsList>

const Template: ComponentStory<typeof ManualRecommendationsList> = (args) => <ManualRecommendationsList {...args} />

export const Normal = Template.bind({})
Normal.args = {

}
