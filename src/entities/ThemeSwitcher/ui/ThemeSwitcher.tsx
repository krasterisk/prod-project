import React, { memo } from 'react'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import ThemeIcon from '@/shared/assets/icons/theme.svg'
import { Icon } from '@/shared/ui/redesigned/Icon'

interface ThemeSwitcherProps {
  className?: string

}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme()

  return (
        <Icon
                                      Svg={ThemeIcon}
                                      onClick={toggleTheme}
                                      clickable
                                  />
  )
})
