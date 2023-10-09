import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

interface ErrorGetDataProps {
  error?: string
}

export const ErrorGetData = memo(({ error }: ErrorGetDataProps) => {
  const { t } = useTranslation()

  return (
            <HStack
                justify={'center'}
                max
            >
                <Text
                    variant={'error'}
                    title={t('Ошибка получения данных!')}
                    text={error || t('Попробуйте обновить страницу')}
                    align={'center'}
                />
            </HStack>
  )
})
