import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ManualList } from './ManualList'
import { Manual } from '../../model/types/manual'
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator'

export default {
    title: 'entities/Manual/ManualList',
    component: ManualList,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ManualList>

const Template: ComponentStory<typeof ManualList> = (args) => <ManualList {...args} />

const manual = {
    id: '20',
    title: 'TEST ADMIN',
    subtitle: 'Testing',
    image: 'https://krasterisk.ru/logos/logo.svg',
    views: 40,
    userId: 1,
    createdAt: '2023-05-01T05:22:42.000Z',
    updatedAt: '2023-05-01T05:22:42.000Z',
    user: {
        id: 1,
        username: 'admin2',
        firstname: 'Андрей',
        lastname: 'Иванов',
        age: 23,
        country: 'Belarus',
        email: 'admin2@krasterisk.ru',
        currency: 'EUR',
        avatar: 'https://krasterisk.ru/logos/adm.jpg',
        password: '$2a$05$3Z7.rP38TvaBgoik6LDt9OOfYopEZvF9WFmnJysUduPi9usFX5Dbq',
        banned: null,
        banReason: null,
        vpbx_user_id: 1,
        createdAt: '2023-04-29T06:43:51.000Z',
        updatedAt: '2023-05-01T08:29:16.000Z'
    },
    comments: [
        {
            id: 4,
            text: 'tsets',
            postId: 20,
            userId: 1,
            createdAt: '2023-05-01T05:26:50.000Z',
            updatedAt: '2023-05-01T05:26:50.000Z'
        }
    ],
    hashtags: [{
        id: 23,
        title: 'OUTBOUND_CALLCENTER',
        postId: 20,
        createdAt: '2023-05-01T05:22:42.000Z',
        updatedAt: '2023-05-01T05:22:42.000Z'
    }],
    blocks: [{
        id: 39,
        title: 'Заголовок этого блока',
        type: 'TEXT',
        postId: 20,
        createdAt: '2023-05-01T05:22:42.000Z',
        updatedAt: '2023-05-01T05:22:42.000Z',
        paragraphs: [{
            id: 77,
            paragraph: 'Программа2, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
            blockTextId: 39,
            createdAt: '2023-05-01T05:22:42.000Z',
            updatedAt: '2023-05-01T05:22:42.000Z'
        }, {
            id: 78,
            paragraph: 'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
            blockTextId: 39,
            createdAt: '2023-05-01T05:22:42.000Z',
            updatedAt: '2023-05-01T05:22:42.000Z'
        }]
    }, {
        id: 40,
        title: 'Заголовок второго блока',
        type: 'TEXT',
        postId: 20,
        createdAt: '2023-05-01T05:22:42.000Z',
        updatedAt: '2023-05-01T05:22:42.000Z',
        paragraphs: [{
            id: 79,
            paragraph: 'Программа5, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
            blockTextId: 40,
            createdAt: '2023-05-01T05:22:42.000Z',
            updatedAt: '2023-05-01T05:22:42.000Z'
        }, {
            id: 80,
            paragraph: 'Программа4, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
            blockTextId: 40,
            createdAt: '2023-05-01T05:22:42.000Z',
            updatedAt: '2023-05-01T05:22:42.000Z'
        }]
    }, {
        id: 20,
        title: 'super image',
        type: 'IMAGE',
        src: 'https://krasterisk.ru/logos/logo.svg',
        postId: 20,
        createdAt: '2023-05-01T05:22:42.000Z',
        updatedAt: '2023-05-01T05:22:42.000Z'
    }, {
        id: 39,
        type: 'CODE',
        code: '2<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        postId: 20,
        createdAt: '2023-05-01T05:22:42.000Z',
        updatedAt: '2023-05-01T05:22:42.000Z'
    }, {
        id: 40,
        type: 'CODE',
        code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        postId: 20,
        createdAt: '2023-05-01T05:22:42.000Z',
        updatedAt: '2023-05-01T05:22:42.000Z'
    }]
} as unknown as Manual

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
ListSmall.decorators = [RouterDecorator]

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
ListBig.decorators = [RouterDecorator]
