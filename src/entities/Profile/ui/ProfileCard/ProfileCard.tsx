import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { Profile } from 'features/EditableProfileCard'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Currency } from 'entities/Currency/model/types/Currency'
import { CurrencySelect } from 'entities/Currency'
import { Country, CountrySelect } from 'entities/Country'

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
            <div
                className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader/>
            </div>
        )
    }

    if (error) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Ошибка получения данных профиля!')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        )
    }

    const mods: Mods = {
        [cls.editing]: !readonly
    }

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && <div className={cls.avatarWrapper}>
                    <Avatar
                        src={data?.avatar}
                    />
                </div>
                }

                <Input
                    value={data?.firstname}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                    disabled={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                    disabled={readonly}
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
            </div>
        </div>
    )
}
