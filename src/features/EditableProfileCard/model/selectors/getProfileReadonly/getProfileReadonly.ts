import { StateSchema } from 'app/providers/StoreProvider'

export const getProfileReadonly = (state: StateSchema) => state?.profileForm?.readonly
