import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import cls from './Text.module.scss'
import { memo } from 'react'

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error'
}

interface TextProps {
    className?: string
    title?: string | undefined | null
    text?: string | undefined | null
    theme?: TextTheme
    align?: TextAlign
    size?: TextSize
    'data-testid'?: string
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4'

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h4',
    [TextSize.M]: 'h3',
    [TextSize.L]: 'h2',
    [TextSize.XL]: 'h1'

}
export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        'data-testid': dataTestId = 'Text'
    } = props

    const HeaderTag = mapSizeToHeaderTag[size]

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true
    }

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <HeaderTag
                className={cls.title}
                data-testid={`${dataTestId}.header`}
            >
                {title}
            </HeaderTag>}
            {text && (
                <p
                    className={cls.text}
                    data-testid={`${dataTestId}.Paragraph`}
                >
                    {text}
                </p>
            )}

        </div>
    )
})
