import { useTranslation } from 'react-i18next'
import { memo, useMemo } from 'react'
import { SelectOptions } from '@/shared/ui/deprecated/Select'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { EndpointSortField } from '@/entities/Pbx'

interface EndpointsSortSelectorProps {
  className?: string
  sort: EndpointSortField
  onChangeSort: (newSort: EndpointSortField) => void
}

export const EndpointsSortSelector = memo((props: EndpointsSortSelectorProps) => {
  const {
    className,
    sort,
    onChangeSort
  } = props
  const { t } = useTranslation('endpoints')

  const sortFieldOptions = useMemo<Array<SelectOptions<EndpointSortField>>>(() => [
    {
      value: EndpointSortField.EXTEN,
      content: t('Номер')
    },
    {
      value: EndpointSortField.GROUP,
      content: t('Группа')
    },
    {
      value: EndpointSortField.USERNAME,
      content: t('Имя пользователя')
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
