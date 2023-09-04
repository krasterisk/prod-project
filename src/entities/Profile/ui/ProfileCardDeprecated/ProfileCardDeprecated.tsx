import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import cls from './ProfileCardDeprecated.module.scss'
import { memo } from 'react'
import { ProfileCardProps } from '../ProfileCard/ProfileCard'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { CountrySelect } from '@/entities/Country'
import { CurrencySelect } from '@/entities/Currency'
import { useTranslation } from 'react-i18next'
import { Loader } from '@/shared/ui/deprecated/Loader'
import { Text as TextDeprecated, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text'

export const ProfileCardDeprecatedLoader = () => {
  return (
    <HStack
        justify={'center'}
        max
        className={classNames(cls.ProfileCard, { [cls.loading]: true }, [])}>
        <Loader/>
    </HStack>
  )
}

export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation('profile')

  return (
        <HStack
            justify={'center'}
            max
            className={classNames(cls.ProfileCard, {}, [cls.error])}>
            <TextDeprecated
                theme={TextTheme.ERROR}
                title={t('Ошибка получения данных профиля!')}
                text={t('Попробуйте обновить страницу')}
                align={TextAlign.CENTER}
            />
        </HStack>
  )
}

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
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

  const mods: Mods = {
    [cls.editing]: !readonly
  }

  return (
      <VStack max gap={'8'} className={classNames(cls.ProfileCard, mods, [className])}>
        {data?.avatar && (
            <HStack justify='center' max className={cls.avatarWrapper}>
              <AvatarDeprecated src={data?.avatar}/>
            </HStack>
        )}
        <InputDeprecated
            value={data?.firstname}
            placeholder={t('Ваше имя')}
            className={cls.input}
            onChange={onChangeFirstname}
            readonly={readonly}
            disabled={readonly}
            data-testid={'ProfileCard.Firstname'}

        />
        <InputDeprecated
            value={data?.lastname}
            placeholder={t('Ваша фамилия')}
            className={cls.input}
            onChange={onChangeLastname}
            readonly={readonly}
            disabled={readonly}
            data-testid={'ProfileCard.Lastname'}
        />
        <InputDeprecated
            value={data?.age}
            placeholder={t('Ваш возраст')}
            onKeyPress={(event: any) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault()
              }
            }}
            className={cls.input}
            onChange={onChangeAge}
            readonly={readonly}
            disabled={readonly}
        />

        <InputDeprecated
            value={data?.username}
            placeholder={t('Имя пользователя')}
            className={cls.input}
            onChange={onChangeUsername}
            readonly={readonly}
            disabled={readonly}
            data-testid={'ProfileCard.Username'}
        />
        <InputDeprecated
            value={data?.email}
            placeholder={t('Электронная почта')}
            className={cls.input}
            onChange={onChangeEmail}
            readonly={readonly}
            disabled={readonly}
        />
        <InputDeprecated
            value={data?.avatar}
            placeholder={t('Ссылка на аватар')}
            className={cls.input}
            onChange={onChangeAvatar}
            readonly={readonly}
            disabled={readonly}
        />
        <CountrySelect
            className={cls.input}
            value={data?.country}
            readonly={readonly}
            onChange={onChangeCountry}
        />
        <CurrencySelect
            className={cls.input}
            value={data?.currency}
            readonly={readonly}
            onChange={onChangeCurrency}
        />
      </VStack>
  )
})
