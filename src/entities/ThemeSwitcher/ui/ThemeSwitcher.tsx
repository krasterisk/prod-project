import { classNames } from '@/shared/lib/classNames/classNames'
import React, { memo } from 'react'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import ThemeIconDeprecated from '@/shared/assets/icons/theme-light.svg'
import ThemeIcon from '@/shared/assets/icons/theme.svg'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { ToggleFeatures } from '@/shared/lib/features'
import { Icon } from '@/shared/ui/redesigned/Icon'

interface ThemeSwitcherProps {
  className?: string

}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme()

  return (
        <ToggleFeatures feature={'isAppRedesigned'}
                        on={
                            <Icon
                                Svg={ThemeIcon}
                                onClick={toggleTheme}
                                clickable
                            />
                        }
                        off={
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames('', {}, [className])}
                                onClick={toggleTheme}
                            >
                                <IconDeprecated Svg={ThemeIconDeprecated} width={40} height={40} inverted/>

                            </Button>

                        }
        />
  )
})
