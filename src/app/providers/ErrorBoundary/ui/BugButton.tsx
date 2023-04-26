import { useEffect, useState } from 'react'
import { Button } from '@/shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false)
    const { t } = useTranslation()

    const OnThrow = () => { setError(true) }

    useEffect(() => {
        if (error) {
            throw Error()
        }
    }, [error])

    return (
        <Button
            onClick={OnThrow}
        >
            {t('Ошибка')}
        </Button>
    )
}
