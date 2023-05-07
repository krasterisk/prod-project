import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text'
import { Input } from '@/shared/ui/Input'
import { Loader } from '@/shared/ui/Loader'
import { Avatar } from '@/shared/ui/Avatar'
import { Currency, CurrencySelect } from '@/entities/Currency'
import { Country, CountrySelect } from '@/entities/Country'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Profile } from '../../model/types/profile'

interface ProfileCardProps {
    className?: string
    data?: Profile
    error?: string
    isLoading?: boolean
    readonly?: boolean
    onChangeFirstname?: (value?: string) => void
    onChangeLastname?: (value?: string) => void
    onChangeCountry?: (value?: Country) => void
    onChangeAge?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeEmail?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeCurrency?: (currency?: Currency) => void

}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
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

    if (isLoading) {
        return (
            <HStack
                justify={'center'}
                max
                className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader/>
            </HStack>
        )
    }

    if (error) {
        return (
            <HStack
                justify={'center'}
                max
                className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Ошибка получения данных профиля!')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        )
    }

    const mods: Mods = {
        [cls.editing]: !readonly
    }

    return (
        <VStack max gap={'8'} className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify='center' max className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar}/>
                </HStack>
            )}
            <Input
                value={data?.firstname}
                placeholder={t('Ваше имя')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                disabled={readonly}
                data-testid={'ProfileCard.Firstname'}

            />
            <Input
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                disabled={readonly}
                data-testid={'ProfileCard.Lastname'}
            />
            <Input
                value={data?.age}
                placeholder={t('Ваш возраст')}
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                        event.preventDefault()
                    }
                }}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
                disabled={readonly}
            />

            <Input
                value={data?.username}
                placeholder={t('Имя пользователя')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
                disabled={readonly}
            />
            <Input
                value={data?.email}
                placeholder={t('Электронная почта')}
                className={cls.input}
                onChange={onChangeEmail}
                readonly={readonly}
                disabled={readonly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Ссылка на ваш аватар')}
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
}
