import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ManualList.module.scss'
import { HTMLAttributeAnchorTarget, memo } from 'react'
import { Manual, ManualView } from '../../model/types/manual'
import { ManualListItem } from '../ManualListItem/ManualListItem'
import { ManualListItemSkeleton } from '../ManualListItem/ManualListItemSkeleton'
import { Text, TextSize } from '@/shared/ui/Text'
import { useTranslation } from 'react-i18next'

interface ManualListProps {
  className?: string
  manuals: Manual[]
  isLoading?: boolean
  view?: ManualView
  target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ManualView) => {
  return new Array(view === 'SMALL' ? 9 : 3)
    .fill(0)
    .map((item, index) => (
            <ManualListItemSkeleton className={cls.card} key={index} view={view} />
    ))
}
export const ManualList = memo((props: ManualListProps) => {
  const {
    className,
    view = 'SMALL',
    manuals,
    isLoading,
    target
  } = props

  const { t } = useTranslation('manuals')

  const renderManual = (manual: Manual) => {
    return (
            <ManualListItem
                manual={manual}
                view={view}
                key={manual.id}
                className={cls.card}
                target={target}
            />
    )
  }

  if (!isLoading && !manuals.length) {
    return (
            <div className={classNames(cls.ManualList, {}, [className, cls[view]])}>
                <Text
                    size={TextSize.XL}
                    text={t('Статьи не найдены')}
                />
            </div>
    )
  }

  return (
        <div className={classNames(cls.ManualList, {}, [className, cls[view]])}
            data-testid={'ManualList'}
        >
            {manuals.length
              ? manuals.map(renderManual)
              : null
            }
            {isLoading && getSkeletons(view)}
        </div>
  )
})
