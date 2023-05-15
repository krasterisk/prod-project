import { Button } from '@/shared/ui/Button'
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { useCounterActions } from '../model/slice/counterSlice'

export const Counter = memo(() => {
    const counterValue = useCounterValue()
    const { t } = useTranslation()
    const { decrement, increment, plusFive } = useCounterActions()

    const handleInc = () => {
        increment()
    }

    const handleDec = () => {
        decrement()
    }
    const handelFive = () => {
        plusFive()
    }

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                onClick={handleDec}
                data-testid="decrement-btn"
            >
                {t('decrement')}
            </Button>
            <Button
                onClick={handleInc}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                onClick={handelFive}
                data-testid='plus5-btn'
            >
                {t('plus 5')}
            </Button>

        </div>
    )
})
