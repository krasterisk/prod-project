import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ManualViewSelector.module.scss'
import { memo, SVGProps, VFC } from 'react'
import ListIcon from '@/shared/assets/icons/burger.svg'
import TiledIcon from '@/shared/assets/icons/tile.svg'
import { ManualView } from '@/entities/Manual'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Card } from '@/shared/ui/redesigned/Card'
import { HStack } from '@/shared/ui/redesigned/Stack'

interface ManualViewSelectorProps {
  className?: string
  view: ManualView
  onViewClick: (view: ManualView) => void
}

interface viewsAttr {
  view: ManualView
  icon: VFC<SVGProps<SVGSVGElement>>
}

const viewTypes: viewsAttr[] = [
  {
    view: 'BIG',
    icon: TiledIcon
  },
  {
    view: 'SMALL',
    icon: ListIcon
  }
]

export const ManualViewSelector = memo((props: ManualViewSelectorProps) => {
  const {
    className,
    view,
    onViewClick
  } = props

  const onClick = (newView: ManualView) => () => {
    onViewClick?.(newView)
  }

  return (
      <Card
                  className={classNames(
                    cls.ManualViewSelectorRedesigned,
                    {},
                    [className]
                  )}
                  border={'partial'}
              >
                <HStack gap="8">
                  {viewTypes.map(viewType => (
                        <Icon
                            key={viewType.view.length * 2}
                            clickable
                            onClick={onClick(viewType.view)}
                            width={24}
                            height={24}
                            Svg={viewType.icon}
                            className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                        />
                  ))}
                </HStack>
                    </Card>
  )
})
