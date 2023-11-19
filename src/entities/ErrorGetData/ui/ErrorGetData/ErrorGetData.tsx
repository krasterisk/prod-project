import { useTranslation } from 'react-i18next'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { LoginModal } from '@/features/AuthByUsername'
import { useNavigate } from 'react-router-dom'
import { getRouteEndpoints } from '@/shared/const/router'

interface ErrorGetDataProps {
  title?: string
  text?: string
}

export const ErrorGetData = memo(({ title, text }: ErrorGetDataProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const navigate = useNavigate()

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
    navigate(getRouteEndpoints())
  }, [navigate])

  useEffect(() => {
    if (text === 'TokenExpiredError') {
      setIsAuthModal(true)
    }
  }, [text])

  console.log(isAuthModal)

  return (
            <HStack
                justify={'center'}
                max
            >
                <Text
                    variant={'error'}
                    title={title || t('Ошибка получения данных!')}
                    text={t(String(text)) || t('Попробуйте обновить страницу')}
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
