import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ManualList } from './ManualList'
import { Manual, ManualBlockTypes } from '../../model/types/manual'

export default {
    title: 'entities/Manual/ManualList',
    component: ManualList,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ManualList>

const Template: ComponentStory<typeof ManualList> = (args) => <ManualList {...args} />

const manual = {
    id: '2',
    title: 'TEST ADMIN MANUAL PAGE',
    subtitle: 'Testing',
    image: 'https://krasterisk.ru/logos/logo.svg',
    user: {
        id: '2',
        username: 'Ivan',
        avatar: 'https://krasterisk.ru/logos/logo.svg'
    },
    views: 1022,
    createdAt: '2023-03-21T05:17:51.000Z',
    blocks: [
        {
            id: '3',
            title: 'Заголовок этого блока',
            type: ManualBlockTypes.TEXT,
            paragraphs: [
                {
                    id: '5',
                    paragraph: 'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    blockTextId: '3'
                },
                {
                    id: '6',
                    paragraph: 'Программа2, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    blockTextId: '3'
                }
            ]
        },
        {
            id: '4',
            title: 'Заголовок второго блока',
            type: ManualBlockTypes.TEXT,
            paragraphs: [
                {
                    id: '7',
                    paragraph: 'Программа5, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    blockTextId: '4'
                },
                {
                    id: '8',
                    paragraph: 'Программа4, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    blockTextId: '4'
                }
            ]
        },
        {
            id: '2',
            title: 'super image',
            type: ManualBlockTypes.IMAGE,
            src: 'https://krasterisk.ru/logos/logo.svg'
        },
        {
            id: '3',
            type: ManualBlockTypes.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
        },
        {
            id: '4',
            type: ManualBlockTypes.CODE,
            code: '2<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
        }
    ]
} as Manual

export const isLoading = Template.bind({})
isLoading.args = {
    isLoading: true,
    manuals: [],
    view: 'SMALL'
}

export const isLoadingBig = Template.bind({})
isLoadingBig.args = {
    isLoading: true,
    manuals: [],
    view: 'BIG'
}

export const ListSmall = Template.bind({})
ListSmall.args = {
    manuals: new Array(9)
        .fill(0)
        .map((item, index) => ({
            ...manual,
            id: String(index)
        })),
    view: 'SMALL'
}

export const ListBig = Template.bind({})
ListBig.args = {
    manuals: new Array(9)
        .fill(0)
        .map((item, index) => ({
            ...manual,
            id: String(index)
        })),
    view: 'BIG'
}
