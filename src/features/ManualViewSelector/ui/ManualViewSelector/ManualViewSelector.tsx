import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ManualViewSelector.module.scss'
import { memo, SVGProps, VFC } from 'react'
import TiledIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg'
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg'
import ListIcon from '@/shared/assets/icons/burger.svg'
import TiledIcon from '@/shared/assets/icons/tile.svg'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { ManualView } from '@/entities/Manual'
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features'
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
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => TiledIcon,
      off: () => TiledIconDeprecated
    })
  },
  {
    view: 'SMALL',
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => ListIcon,
      off: () => ListIconDeprecated
    })
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
      <ToggleFeatures
          feature={'isAppRedesigned'}
          on={
        <Card
            className={classNames(
              cls.ManualViewSelectorRedesigned,
              {},
              [className]
            )}
            border={'round'}
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
        }
                    off={
                      <div className={classNames(cls.ManualViewSelector, {}, [className])}>
                        {viewTypes.map(viewType => (
                            <ButtonDeprecated
                                key={viewType.view.length * 2}
                                theme={ButtonTheme.CLEAR}
                                onClick={onClick(viewType.view)}
                            >
                              <IconDeprecated
                                  width={24}
                                  height={24}
                                  Svg={viewType.icon}
                                  className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                              />
                            </ButtonDeprecated>
                        ))}
                      </div>
            }
                />
  )
})
