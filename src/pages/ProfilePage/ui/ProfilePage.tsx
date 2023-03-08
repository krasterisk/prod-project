import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useCallback, useEffect } from 'react'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ProfileCard } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    profileReducer
} from 'features/EditableProfileCard'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

const reducers: ReducersList = {
    profileForm: profileReducer
}

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch()
    const formData = useSelector(getProfileForm)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
    const readonly = useSelector(getProfileReadonly)

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ firstname: value || '' }))
    }, [dispatch])
    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }))
    }, [dispatch])
    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({ country }))
    }, [dispatch])
    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
    }, [dispatch])
    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }))
    }, [dispatch])
    const onChangeEmail = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ email: value || '' }))
    }, [dispatch])
    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }))
    }, [dispatch])
    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
            </div>
            <ProfilePageHeader />
            <ProfileCard
                data={formData}
                isLoading={isLoading}
                error={error}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeCountry={onChangeCountry}
                onChangeCurrency={onChangeCurrency}
                onChangeAge={onChangeAge}
                onChangeUsername={onChangeUsername}
                onChangeEmail={onChangeEmail}
                onChangeAvatar={onChangeAvatar}
                readonly={readonly}
            />
        </DynamicModuleLoader>
    )
})

export default ProfilePage
