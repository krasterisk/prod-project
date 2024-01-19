import { useTranslation } from 'react-i18next'
import { memo, useMemo } from 'react'
import { SelectOptions } from '@/shared/ui/deprecated/Select'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { ProvisionTemplatesSortField } from '@/entities/Pbx'

interface ProvisioningSortSelectorProps {
  className?: string
  sort: ProvisionTemplatesSortField
  onChangeSort: (newSort: ProvisionTemplatesSortField) => void

}

export const ProvisioningSortSelector = memo((props: ProvisioningSortSelectorProps) => {
  const {
    className,
    sort,
    onChangeSort
  } = props
  const { t } = useTranslation('endpoints')

  const sortFieldOptions = useMemo<Array<SelectOptions<ProvisionTemplatesSortField>>>(() => [
    {
      value: ProvisionTemplatesSortField.NAME,
      content: t('Имя')
    },
    {
      value: ProvisionTemplatesSortField.FILENAME,
      content: t('Описание')
    },
    {
      value: ProvisionTemplatesSortField.DESCRIPTION,
      content: t('Описание')
    }
  ], [t])

  return (
        <div className={className}>
            <VStack gap={'8'}>
                <Text text={t('Сортировать по')}/>
                <ListBox
                    items={sortFieldOptions}
                    onChange={onChangeSort}
                    value={sort}
                />
            </VStack>
        </div>
  )
})
