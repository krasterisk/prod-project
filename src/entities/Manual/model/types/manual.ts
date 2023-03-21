
export enum ManualBlockTypes {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    NOTE = 'NOTE'
}

export interface ManualBlockBase {
    id: string
    type: ManualBlockTypes
}

export interface ManualCodeBlock extends ManualBlockBase {
    type: ManualBlockTypes.CODE
    code: string
}

export interface ManualImageBlock extends ManualBlockBase {
    type: ManualBlockTypes.IMAGE
    src: string
    title: string
}

export interface ManualTextParagraph {
    id: string
    paragraph: string
    blockTextId: string
}

export interface ManualTextBlock extends ManualBlockBase {
    type: ManualBlockTypes.TEXT
    title?: string
    paragraphs: ManualTextParagraph[]
}

export type ManualBlock = ManualCodeBlock | ManualImageBlock | ManualTextBlock

export enum ManualHashtags {
    IT = 'IT',
    INBOUND_CALL_CENTER = 'INBOUND_CALL_CENTER',
    PBX = 'PBX',
    OUTBOUND_CALL_CENTER = 'OUTBOUND_CALL_CENTER',
    IP_PHONES = 'IP_PHONES'
}

export interface Manual {
    id: string
    title: string
    subtitle: string
    image: string
    views: number
    createdAt: string
    hashtags: ManualHashtags[]
    blocks: ManualBlock[]
}
