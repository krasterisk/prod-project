import { classNames } from 'shared/lib/classNames'
import { useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false)

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
            Throw Error
        </Button>
    )
}
