import { useTranslation } from 'react-i18next'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import { Profile } from '../../model/types/profile'
import { ToggleFeatures } from '@/shared/lib/features'
import {
  ProfileCardDeprecated,
  ProfileCardDeprecatedError,
  ProfileCardDeprecatedLoader
} from '../ProfileCardDeprecated/ProfileCardDeprecated'
import {
  ProfileCardRedesigned,
  ProfileCardRedesignedError,
  ProfileCardRedesignedSkeleton
} from '../ProfileCardRedesigned/ProfileCardRedesigned'

export interface ProfileCardProps {
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
  const { t } = useTranslation('profile')
  const { className, isLoading, error } = props

  if (isLoading) {
    return (
      <ToggleFeatures
          feature={'isAppRedesigned'}
          on={ <ProfileCardRedesignedSkeleton /> }
          off={ <ProfileCardDeprecatedLoader /> }
          />
    )
  }

  if (error) {
    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={ <ProfileCardRedesignedError /> }
            off={ <ProfileCardDeprecatedError /> }
            />
    )
  }

  return (
      <ToggleFeatures
          feature={'isAppRedesigned'}
          on={<ProfileCardRedesigned {...props} />}
          off={<ProfileCardDeprecated {...props} />}
          />
  )
}
