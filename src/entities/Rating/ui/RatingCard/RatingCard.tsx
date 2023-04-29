import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './RatingCard.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { Card } from '@/shared/ui/Card/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text/Text'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { Modal } from '@/shared/ui/Modal/Modal'
import { Input } from '@/shared/ui/Input/Input'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { Drawer } from '@/shared/ui/Drawer/Drawer'

interface RatingCardProps {
    className?: string
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        onCancel,
        onAccept,
        feedbackTitle,
        hasFeedback,
        title
    } = props
    const { t } = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [starsCount, setStarsCount] = useState(0)
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
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Ваш отзыв')}
            />
            <HStack max gap={'16'} justify={'end'}>
                <Button theme={ButtonTheme.OUTLINE_RED} onClick={cancelHandler}>
                    {t('Закрыть')}
                </Button>
                <Button onClick={acceptHandler}>
                    {t('Отправить')}
                </Button>
            </HStack>
        </VStack>
    )
    const isMobile = useDevice()

    return (
        <Card className={classNames(cls.RatingCard, {}, [className])}>
            <VStack align={'center'} gap={'8'}>
                <Text text={title} />
                <StarRating size={40} onSelect={onSelectStars}/>

            </VStack>
            {!isMobile
                ? <Modal isOpen={isModalOpen} lazy>
                    {modalContent}
                </Modal>
                : <Drawer isOpen={isModalOpen} onClose={cancelHandler}>
                    {modalContent}
                </Drawer>
            }
        </Card>
    )
})
