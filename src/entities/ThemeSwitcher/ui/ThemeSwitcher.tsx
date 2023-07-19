import { classNames } from '@/shared/lib/classNames/classNames'
import React, { memo } from 'react'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import ThemeIcon from '@/shared/assets/icons/theme-light.svg'
import { Icon } from '@/shared/ui/deprecated/Icon'

interface ThemeSwitcherProps {
  className?: string

}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme()

  return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            <Icon Svg={ThemeIcon} width={40} height={40} inverted />

        </Button>
  )
})
