import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './RatingCard.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { Card } from '@/shared/ui/deprecated/Card'
import { HStack, VStack } from '@/shared/ui/deprecated/Stack'
import { Text } from '@/shared/ui/deprecated/Text'
import { StarRating } from '@/shared/ui/deprecated/StarRating'
import { Modal } from '@/shared/ui/deprecated/Modal'
import { Input } from '@/shared/ui/deprecated/Input'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { Drawer } from '@/shared/ui/deprecated/Drawer'

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
        <VStack gap={'32'} max>
            <Text title={feedbackTitle}/>
            <Input
                data-testid={'RatingCard.Input'}
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Ваш отзыв')}
            />
        </VStack>
  )

  const isMobile = useDevice()

  return (
        <Card
            data-testid={'RatingCard'}
            className={classNames(cls.RatingCard, {}, [className])}
            max
        >
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
                            theme={ButtonTheme.OUTLINE_RED}>
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
                            size={ButtonSize.L}>
                            {t('Отправить')}
                        </Button>
                    </HStack>
                </Drawer>
            }
        </Card>
  )
})
