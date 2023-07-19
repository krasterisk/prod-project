import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ManualViewSelector.module.scss'
import { memo, SVGProps, VFC } from 'react'
import ListIcon from '@/shared/assets/icons/list-24-24.svg'
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg'
import { Icon } from '@/shared/ui/deprecated/Icon'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { ManualView } from '@/entities/Manual'

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
    icon: ListIcon
  },
  {
    view: 'SMALL',
    icon: TiledIcon
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
        <div className={classNames(cls.ManualViewSelector, {}, [className])}>
            {viewTypes.map(viewType => (
                <Button
                    key={viewType.view.length * 2}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        width={24}
                        height={24}
                        Svg={viewType.icon}
                        className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                    />
                </Button>
            ))}
        </div>
  )
})
