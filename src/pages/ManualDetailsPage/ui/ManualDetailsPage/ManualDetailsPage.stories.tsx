import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ManualDetailsPage from './ManualDetailsPage'
import { Manual, ManualBlockTypes } from '@/entities/Manual'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'pages/ManualDetailsPage/ManualDetailsPage',
    component: ManualDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ManualDetailsPage>

const Template: ComponentStory<typeof ManualDetailsPage> = (args) => <ManualDetailsPage {...args} />

const manual: Manual = {
    id: '1',
    createdAt: '2023-03-21',
    title: 'TEST ADMIN',
    subtitle: 'Testing',
    image: 'https://krasterisk.ru/logos/logo.svg',
    views: 1022,
    user: {
        id: '2',
        username: 'Ivan',
        avatar: 'https://krasterisk.ru/logos/logo.svg'
    },
    hashtags: [],
    blocks: [
        {
            id: '1',
            type: ManualBlockTypes.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                {
                    id: '1',
                    paragraph: 'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    blockTextId: '1'
                },
                {
                    id: '2',
                    paragraph: 'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    blockTextId: '1'
                }
            ]
        },
        {
            id: '2',
            type: ManualBlockTypes.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
        },
        {
            id: '3',
            type: ManualBlockTypes.CODE,
            code: '2<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
        },
        {
            id: '4',
            type: ManualBlockTypes.IMAGE,
            title: 'super image',
            src: 'https://krasterisk.ru/logos/logo.svg'
        },
        {
            id: '5',
            type: ManualBlockTypes.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                {
                    id: '1',
                    paragraph: 'Программа5, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    blockTextId: '5'
                },
                {
                    id: '2',
                    paragraph: 'Программа6, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    blockTextId: '5'
                }
            ]
        }
    ]
}

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({
    manualDetails: {
        data: manual
    }
})]
