import { Profile } from '../../types/profile'
import { ValidateProfileError } from '../../consts/consts'

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA]
    }

    const { age, firstname, lastname, country } = profile

    const errors: ValidateProfileError[] = []

    if (!firstname || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA)
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_USER_AGE)
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY)
    }
    return errors
}
