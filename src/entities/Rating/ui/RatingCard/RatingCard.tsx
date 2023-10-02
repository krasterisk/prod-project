import cls from './RatingCard.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { Text } from '@/shared/ui/redesigned/Text'
import { Input } from '@/shared/ui/redesigned/Input'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { StarRating } from '@/shared/ui/deprecated/StarRating'
import { Modal } from '@/shared/ui/redesigned/Modal'
import { Button } from '@/shared/ui/redesigned/Button'
import { Drawer } from '@/shared/ui/redesigned/Drawer'
import { Card } from '@/shared/ui/redesigned/Card'

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
  rate?: number
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    onCancel,
    onAccept,
    feedbackTitle,
    hasFeedback,
    title,
    rate = 0
  } = props
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [starsCount, setStarsCount] = useState(rate)
  const [feedback, setFeedback] = useState('')

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount)
    if (hasFeedback) {
      setIsModalOpen(true)
    } else {
      onAccept?.(selectedStarsCount)
    }
  }, [hasFeedback, onAccept])

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false)
    onAccept?.(starsCount, feedback)
  }, [feedback, onAccept, starsCount])

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false)
    onCancel?.(starsCount)
  }, [onCancel, starsCount])

  const modalContent = (
        <>
                          <Text title={feedbackTitle}/>
                          <Input
                              className={className}
                              data-testid={'RatingCard.Input'}
                              value={feedback}
                              onChange={setFeedback}
                              placeholder={t('Ваш отзыв') ?? ''}
                          />
                      </>
  )

  const isMobile = useDevice()

  const content = (
        <>
            <VStack align={'center'} gap={'8'}>
                <Text title={starsCount ? t('Спасибо за оценку!') : title}/>
                <StarRating size={40} onSelect={onSelectStars} selectedStars={starsCount}/>
            </VStack>
            {!isMobile
              ? <Modal isOpen={isModalOpen} lazy>
                                          {modalContent}
                                          <HStack gap={'16'} justify={'end'}>
                                              <Button
                                                  data-testid={'RatingCard.Close'}
                                                  onClick={cancelHandler}
                                                  variant={'outline'}
                                              >
                                                  {t('Закрыть')}
                                              </Button>
                                              <Button
                                                  data-testid={'RatingCard.Send'}
                                                  onClick={acceptHandler}
                                              >
                                                  {t('Отправить')}
                                              </Button>
                                          </HStack>
                                      </Modal>
              : <Drawer isOpen={isModalOpen} onClose={cancelHandler}>
                    {modalContent}
                    <HStack max gap={'16'} justify={'end'}>
                                                  <Button
                                                      onClick={acceptHandler}
                                                      className={cls.fullwidth}
                                                      size={'l'}>
                                                      {t('Отправить')}
                                                  </Button>
                                              </HStack>

                </Drawer>
            }
        </>
  )

  return (
        <Card
                          padding={'24'}
                          max
                      >
                          {content}
                      </Card>
  )
})
