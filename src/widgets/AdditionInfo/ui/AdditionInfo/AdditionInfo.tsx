import { memo } from 'react'
import { User } from '@/entities/User'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Button } from '@/shared/ui/redesigned/Button'
import { Text } from '@/shared/ui/redesigned/Text'
import { useTranslation } from 'react-i18next'

interface AdditionInfoProps {
  className?: string
  author: User
  createdAt: string
  views: number
  onEdit: () => void
}

export const AdditionInfo = memo((props: AdditionInfoProps) => {
  const {
    className,
    author,
    createdAt,
    views,
    onEdit
  } = props

  const { t } = useTranslation()

  return (
        <VStack
            gap={'32'}
            className={className}
        >
            <Avatar src={author.avatar} size={32} username={author.username} createdAt={createdAt}/>
            <Button onClick={onEdit}>{t('Редактировать')}</Button>
            <Text text={t('{{count}} просмотров', { count: views })}/>
        </VStack>
  )
})
