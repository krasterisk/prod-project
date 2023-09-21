import { memo, useCallback } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { AdditionInfo } from '@/widgets/AdditionInfo'
import { useSelector } from 'react-redux'
import { getManualDetailsData } from '@/entities/Manual'
import cls from './AdditionInfoContainer.module.scss'
import { useNavigate } from 'react-router-dom'
import { getRouteManualEdit } from '@/shared/const/router'

export const AdditionInfoContainer = memo(() => {
  const manual = useSelector(getManualDetailsData)
  const navigate = useNavigate()

  const onEditPage = useCallback(() => {
    if (manual?.id) {
      navigate(getRouteManualEdit(manual?.id))
    }
  }, [manual, navigate])
  if (!manual) {
    return null
  }

  return (
        <Card max fullHeight padding={'24'} border={'round'} className={cls.card}>
            <AdditionInfo
                onEdit={onEditPage}
                createdAt={manual.createdAt}
                author={manual.user}
                views={manual.views}
            />
        </Card>
  )
})
