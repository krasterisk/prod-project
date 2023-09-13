import { memo } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Input } from '@/shared/ui/redesigned/Input'
import { CountrySelect } from '@/entities/Country'
import { CurrencySelect } from '@/entities/Currency'
import { ProfileCardProps } from '../ProfileCard/ProfileCard'
import { useTranslation } from 'react-i18next'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { Text } from '@/shared/ui/redesigned/Text'

export const ProfileCardRedesignedSkeleton = () => {
  return (
      <Card padding="24" max>
        <VStack gap="32">
          <HStack max justify="center">
            <Skeleton border="100%" width={128} height={128} />
          </HStack>
          <HStack gap="32" max>
            <VStack gap="16" max>
              <Skeleton width="100%" height={38} />
              <Skeleton width="100%" height={38} />
              <Skeleton width="100%" height={38} />
              <Skeleton width="100%" height={38} />
            </VStack>

            <VStack gap="16" max>
              <Skeleton width="100%" height={38} />
              <Skeleton width="100%" height={38} />
              <Skeleton width="100%" height={38} />
              <Skeleton width="100%" height={38} />
            </VStack>
          </HStack>
        </VStack>
      </Card>
  )
}

export const ProfileCardRedesignedError = () => {
  const { t } = useTranslation('profile')

  return (
      <HStack
          justify={'center'}
          max
 >
        <Text
            variant={'error'}
            title={t('Ошибка получения данных профиля!')}
            text={t('Попробуйте обновить страницу')}
            align={'center'}
        />
      </HStack>
  )
}

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
  const {
    className,
    data,
    onChangeLastname,
    onChangeFirstname,
    onChangeCountry,
    onChangeAge,
    onChangeUsername,
    onChangeEmail,
    onChangeAvatar,
    onChangeCurrency,
    readonly
  } = props

  const { t } = useTranslation('profile')

  return (
      <Card
          padding={'24'}
          max
          className={className}>
        <VStack gap={'32'}>
          {data?.avatar && (
              <HStack justify='center' max>
                <Avatar size={128} src={data?.avatar}/>
              </HStack>
          )}
          <HStack gap={'24'}>
            <VStack gap={'16'} max>
              <Input
                  value={data?.firstname}
                  label={t('Имя') ?? ''}
                  onChange={onChangeFirstname}
                  readonly={readonly}
                  disabled={readonly}
                  data-testid={'ProfileCard.Firstname'}

              />
              <Input
                  value={data?.lastname}
                  label={t('Фамилия') ?? ''}
                  onChange={onChangeLastname}
                  readonly={readonly}
                  disabled={readonly}
                  data-testid={'ProfileCard.Lastname'}
              />
              <Input
                  value={data?.age}
                  label={t('Возраст') ?? ''}
                  onKeyPress={(event: any) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault()
                    }
                  }}
                  onChange={onChangeAge}
                  readonly={readonly}
                  disabled={readonly}
              />
              <Input
                  value={data?.username}
                  label={t('Логин') ?? ''}
                  onChange={onChangeUsername}
                  readonly={readonly}
                  disabled={readonly}
                  data-testid={'ProfileCard.Username'}
              />
            </VStack>
            <VStack gap={'16'} max>
              <Input
                  value={data?.email}
                  label={t('Электронная почта') ?? ''}
                  onChange={onChangeEmail}
                  readonly={readonly}
                  disabled={readonly}
              />
              <Input
                  value={data?.avatar}
                  label={t('Ссылка на аватар') ?? ''}
                  onChange={onChangeAvatar}
                  readonly={readonly}
                  disabled={readonly}
              />
              <CountrySelect
                  value={data?.country}
                  readonly={readonly}
                  onChange={onChangeCountry}
              />
              <CurrencySelect
                  value={data?.currency}
                  readonly={readonly}
                  onChange={onChangeCurrency}
              />
            </VStack>
          </HStack>
        </VStack>
      </Card>
  )
})
