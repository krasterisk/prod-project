import { createSelector } from '@reduxjs/toolkit'
import { getManualDetailsData } from '@/entities/Manual'
import { getUserAuthData } from '@/entities/User'
import { getTokenData } from '@/shared/api/getTokenData/getTokenData'

export const getCanEditManual = createSelector(
    getManualDetailsData,
    getUserAuthData,
    (manual, user) => {
        if (!manual || !user) {
            return false
        }
        const userId = getTokenData(user.token)
        return String(manual.user.id) === String(userId)
    }
)
