import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page/Page'
import { ListBox } from 'shared/ui/ListBox/ListBox'
import { HStack } from 'shared/ui/Stack'

const MainPage = memo(() => {
    const { t } = useTranslation('main')

    return (
        <Page>
            {t('Главная')}
            <div>132131</div>
            <div>132131</div>
            <HStack>
                <div>132131</div>
                <ListBox
                    defaultValue={'Выберите значение'}
                    onChange={(value: string) => {}}
                    value={undefined}
                    items={[
                        { value: '1', content: '123' },
                        { value: '2', content: '312' },
                        { value: '3', content: '1аывавыа', disabled: true },
                        { value: '4', content: '123аыва' },
                        { value: '5', content: '123аыав' }
                    ]}
                />
            </HStack>
            <div>132131</div>
            <div>132131</div>

        </Page>
    )
})

export default MainPage
