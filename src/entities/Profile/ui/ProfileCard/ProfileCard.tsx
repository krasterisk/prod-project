import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { Profile } from 'features/EditableProfileCard'
import { Loader } from 'shared/ui/Loader/Loader'
import { Country } from 'shared/const/common'

interface ProfileCardProps {
    className?: string
    data?: Profile
    error?: string
    isLoading?: boolean
    onChangeFirstname: (value?: string) => void
    onChangeLastname: (value?: string) => void
    onChangeCountry: (value?: Country) => void
    onChangeAge: (value?: string) => void
    readonly?: boolean
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

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
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
                    value={data?.country}
                    placeholder={t('Ваша страна')}
                    className={cls.input}
                    onChange={onChangeCountry}
                    readonly={readonly}
                    disabled={readonly}
                />
            </div>
        </div>
    )
}
