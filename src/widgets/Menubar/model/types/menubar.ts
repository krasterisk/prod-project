import React from 'react'

export interface MenubarItemType {
  path: string
  text: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
  subItems?: MenubarItemType[]
}
