import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/deprecated/Stack'
import { EditableProfileCard } from '@/features/EditableProfileCard'
import { useParams } from 'react-router-dom'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>()

  return (
        <Page data-testid={'ProfilePage'} className={classNames('', {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id}/>
            </VStack>
        </Page>
  )
})

export default ProfilePage
