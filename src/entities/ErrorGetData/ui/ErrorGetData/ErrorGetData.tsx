import { useTranslation } from 'react-i18next'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { LoginModal } from '@/features/AuthByUsername'

interface ErrorGetDataProps {
  title?: string
  text?: string
  onRefetch?: () => void
}

export const ErrorGetData = memo(({ title, text, onRefetch }: ErrorGetDataProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
    onRefetch?.()
  }, [onRefetch])

  useEffect(() => {
    if (text === 'TokenExpiredError') {
      setIsAuthModal(true)
      t(String(text))
    }
  }, [t, text])

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
                {isAuthModal && (
                    <LoginModal
                        isOpen={isAuthModal}
                        onClose={onCloseModal}
                    />
                )}

            </HStack>
  )
})
