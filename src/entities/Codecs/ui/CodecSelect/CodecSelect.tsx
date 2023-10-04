import { memo, useCallback } from 'react'
import { Codecs } from '../../model/types/Codecs'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { useTranslation } from 'react-i18next'

interface CodecSelectProps {
  className?: string
  value?: Codecs
  onChange?: (value: Codecs) => void
  readonly?: boolean
}

const options = [
  {
    value: Codecs.alaw,
    content: Codecs.alaw
  },
  {
    value: Codecs.ulaw,
    content: Codecs.ulaw
  },
  {
    value: Codecs.gsm,
    content: Codecs.gsm
  },
  {
    value: Codecs.g729,
    content: Codecs.g729
  },
  {
    value: Codecs.g726,
    content: Codecs.g726
  }
]

export const CodecSelect = memo(({ className, value, onChange, readonly }: CodecSelectProps) => {
  const { t } = useTranslation()

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Codecs)
  }, [onChange])

  const props = {
    className,
    items: options,
    value,
    defaultValue: String(t('Выбрать')),
    label: String(t('Кодеки')),
    onChange: onChangeHandler,
    readonly,
    multiple: true,
    direction: 'bottom-right' as const
  }

  return (
            <ListBox {...props} />
  )
})
