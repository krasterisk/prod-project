import { Manual } from '../../model/types/manual'
import { manualDetailsReducer } from './manualDetailsSlice'
import { fetchManualById } from '../services/fetchManualById/fetchManualById'
import { ManualDetailsSchema } from '../types/manualDetailsSchema'
import { ManualBlockTypes } from '../../model/consts/consts'

describe('profileSlice.test', () => {
  const data: Manual = {
    id: '1',
    title: 'TEST ADMIN',
    subtitle: 'Testing',
    image: 'https://krasterisk.ru/logos/logo.svg',
    views: 1022,
    user: {
      id: '2',
      username: 'Ivan'
    },
    createdAt: '2023-03-21',
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

  test('test get Manual fulfilled', () => {
    const state: DeepPartial<ManualDetailsSchema> = {
      isLoading: true
    }

    expect(manualDetailsReducer(
      state as ManualDetailsSchema,
      fetchManualById.fulfilled(data, '', '')
    )).toEqual({
      isLoading: false,
      data
    })
  })
})
