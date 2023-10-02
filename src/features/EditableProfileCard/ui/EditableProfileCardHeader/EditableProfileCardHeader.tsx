import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { getTokenData } from '@/app/providers/getTokenData/getTokenData'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { Button } from '@/shared/ui/redesigned/Button'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/service/updateProfileData/updateProfileData'
import { Card } from '@/shared/ui/redesigned/Card'

interface EditableProfileCardHeaderProps {
  className?: string
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
  const { className } = props
  const { t } = useTranslation('profile')
  const readonly = useSelector(getProfileReadonly)
  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const userId = String(getTokenData(authData?.token))
  const canEdit = String(profileData?.id) === userId

  const dispatch = useAppDispatch()

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
        <Card border={'partial'} padding={'16'} max>
                      <HStack max justify={'between'} className={classNames('', {}, [className])}>
                          <Text title={t('Профиль')}/>
                          {canEdit && (
                              <>
                                  {readonly
                                    ? (
                                          <Button
                                              onClick={onEdit}
                                              data-testid={'EditableProfileCardHeader.EditButton'}
                                          >
                                              {t('Изменить')}
                                          </Button>
                                      )
                                    : (
                                          <HStack gap='24'>
                                              <Button
                                                  color={'error'}
                                                  onClick={onCancelEdit}
                                                  data-testid={'EditableProfileCardHeader.CancelButton'}
                                              >
                                                  {t('Отменить')}
                                              </Button>
                                              <Button
                                                  onClick={onSave}
                                                  data-testid={'EditableProfileCardHeader.SaveButton'}
                                                  color={'success'}
                                              >
                                                  {t('Сохранить')}
                                              </Button>
                                          </HStack>
                                      )
                                  }
                              </>
                          )}
                      </HStack>
                  </Card>
  )
})
