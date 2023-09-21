import { memo } from 'react'
import { ManualDetails } from '@/entities/Manual'
import { useParams } from 'react-router-dom'
import { Card } from '@/shared/ui/redesigned/Card'

interface DetailsContainerProps {
  className?: string

}

export const DetailsContainer = memo((props: DetailsContainerProps) => {
  const {
    className
  } = props

  const { id } = useParams<{ id: string }>()

  if (!id) {
    return null
  }

  return (
        <Card className={className} padding={'24'}>
          <ManualDetails id={id}/>
        </Card>
  )
})
