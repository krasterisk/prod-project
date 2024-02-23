import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './TabsPanel.module.scss'
import { memo, ReactNode } from 'react'
import { Box, Typography, Tabs, Tab } from '@mui/material'

export interface TabPanelItem {
  label: string
  content: ReactNode
}

interface TabsPanelProps {
  className?: string
  tabItems: TabPanelItem[]
  value: number
  onChange: (event: React.SyntheticEvent, newValue: number) => void
}

interface CustomTabPanelProps {
  children: ReactNode
  value: number
  index: number
}

function CustomTabPanel ({ children, value, index, ...other }: CustomTabPanelProps) {
  return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
  )
}

export const TabsPanel = memo((props: TabsPanelProps) => {
  const {
    className,
    tabItems,
    value,
    onChange
  } = props

  function a11yProps (index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    }
  }

  return (
        <Box className={classNames(cls.TabsPanel, {}, [className])}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={onChange}
                    aria-label="endpoints options"
                    selectionFollowsFocus
                    variant={'scrollable'}
                    scrollButtons={'auto'}
                    textColor={'inherit'}
                >
                    {tabItems.map((item, index) => (
                        <Tab className={cls.tab} key={index} label={item.label} {...a11yProps(index)} />
                    ))}
                </Tabs>
            </Box>
            {tabItems.map((item, index) => (
                <CustomTabPanel key={index} value={value} index={index}>
                    {item.content}
                </CustomTabPanel>
            ))}
        </Box>
  )
})
