import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BugButton } from 'app/providers/ErrorBoundary'
import { Input } from 'shared/ui/Input/Input'

const MainPage = () => {
    const { t } = useTranslation('main')
    const [value, setValue] = useState('')

    const onChange = (val: string) => {
        setValue(val)
    }

    return (
        <div>
            {t('Главная')}
            <BugButton />
            <Input placeholder='Пример ввода' value={value} onChange={onChange} />
        </div>
    )
}

export default MainPage
