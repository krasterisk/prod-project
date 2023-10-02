import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import { Profile } from '../../model/types/profile'

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
  const { isLoading, error } = props

  if (isLoading) {
    return (
      <ProfileCardRedesignedSkeleton />
    )
  }

  if (error) {
    return (
        <ProfileCardRedesignedError />
    )
  }

  return (
      <ProfileCardRedesigned {...props} />
  )
}
