import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

interface ErrorGetDataProps {
  title?: string
  text?: string
}

export const ErrorGetData = memo(({ title, text }: ErrorGetDataProps) => {
  const { t } = useTranslation()

  return (
            <HStack
                justify={'center'}
                max
            >
                <Text
                    variant={'error'}
                    title={title || t('Ошибка получения данных!')}
                    text={text || t('Попробуйте обновить страницу')}
                    align={'center'}
                />
            </HStack>
  )
})
