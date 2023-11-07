import { memo, useCallback, useEffect } from 'react'
import { Codecs } from '../../model/types/Codecs'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { useTranslation } from 'react-i18next'

interface CodecSelectProps {
  className?: string
  value?: string
  onChange: (value: Codecs) => void
  readonly?: boolean
  defaultValue?: string
}

const codecItems = [
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

export const CodecSelect = memo((props: CodecSelectProps) => {
  const { t } = useTranslation()
  const { className, value, onChange, readonly, defaultValue } = props

  //  const initValue = !value && contextItems && contextItems?.length > 0 ? contextItems[0].value : ''

  useEffect(() => {
    if (!value && codecItems && codecItems.length > 0) {
      onChange?.(codecItems[0].value)
    }
  }, [onChange, value])

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Codecs)
  }, [onChange])

  const codecProps = {
    className,
    items: codecItems,
    value,
    defaultValue,
    label: String(t('Кодеки')),
    onChange: onChangeHandler,
    readonly,
    multiple: true,
    direction: 'bottom-right' as const
  }

  // useEffect(() => {
  //   if (codecItems) {
  //     onChange(codecItems[0].value)
  //   }
  // }, [])

  return (
            <ListBox {...codecProps} />
  )
})
