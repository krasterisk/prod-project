import cls from './RatingCard.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { Input } from '@/shared/ui/redesigned/Input'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { ToggleFeatures } from '@/shared/lib/features'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { StarRating } from '@/shared/ui/deprecated/StarRating'
import { Modal } from '@/shared/ui/redesigned/Modal'
import { Button } from '@/shared/ui/redesigned/Button'
import { Button as ButtonDeprecated, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button'
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
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <>
                    <Text title={feedbackTitle}/>
                    <Input
                        data-testid={'RatingCard.Input'}
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Ваш отзыв') ?? ''}
                    />
                </>
            }
            off={
                <>
                    <TextDeprecated title={feedbackTitle}/>
                    <InputDeprecated
                        data-testid={'RatingCard.Input'}
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Ваш отзыв')}
                    />
                </>
            }
        />
  )

  const isMobile = useDevice()

  const content = (
        <>
            <VStack align={'center'} gap={'8'}>
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={
                        <Text title={starsCount ? t('Спасибо за оценку!') : title}/>
                    }
                    off={
                        <TextDeprecated title={starsCount ? t('Спасибо за оценку!') : title}/>
                    }
                />
                <StarRating size={40} onSelect={onSelectStars} selectedStars={starsCount}/>
            </VStack>
            {!isMobile
              ? <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={
                        <Modal isOpen={isModalOpen} lazy>
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
                    }
                    off={
                        <Modal isOpen={isModalOpen} lazy>
                            {modalContent}
                            <HStack gap={'16'} justify={'end'}>
                                <ButtonDeprecated
                                    data-testid={'RatingCard.Close'}
                                    onClick={cancelHandler}
                                    theme={ButtonTheme.OUTLINE_RED}>
                                    {t('Закрыть')}
                                </ButtonDeprecated>
                                <ButtonDeprecated
                                    data-testid={'RatingCard.Send'}
                                    onClick={acceptHandler}
                                >
                                    {t('Отправить')}
                                </ButtonDeprecated>
                            </HStack>
                        </Modal>
                    }
                />
              : <Drawer isOpen={isModalOpen} onClose={cancelHandler}>
                    {modalContent}
                    <ToggleFeatures
                        feature={'isAppRedesigned'}
                        on={
                            <HStack max gap={'16'} justify={'end'}>
                                <Button
                                    onClick={acceptHandler}
                                    className={cls.fullwidth}
                                    size={'l'}>
                                    {t('Отправить')}
                                </Button>
                            </HStack>
                        }
                        off={
                            <HStack max gap={'16'} justify={'end'}>
                                <ButtonDeprecated
                                    onClick={acceptHandler}
                                    className={cls.fullwidth}
                                    size={ButtonSize.L}>
                                    {t('Отправить')}
                                </ButtonDeprecated>
                            </HStack>
                        }
                    />

                </Drawer>
            }
        </>
  )

  return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Card
                    padding={'24'}
                    max
                >
                    {content}
                </Card>
            }
            off={
                <CardDeprecated
                    data-testid={'RatingCard'}
                    className={className}
                    max
                >
                    {content}
                </CardDeprecated>
            }
        />
  )
})
