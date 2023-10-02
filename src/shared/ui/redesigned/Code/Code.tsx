import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import { memo, useCallback } from 'react'
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg'
import CopyIconNew from '@/shared/assets/icons/copy.svg'
import { Icon } from '../Icon'

interface CodeProps {
  className?: string
  text: string
}

export const Code = memo((props: CodeProps) => {
  const {
    className,
    text
  } = props

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
      <pre className={classNames(cls.CodeRedesigned, {}, [className])}>
                  <Icon
                      clickable
                      onClick={onCopy}
                      className={cls.copyBtn}
                      Svg={CopyIconNew}
                  >
                      <CopyIcon className={cls.copyIcon}/>
                  </Icon>
                  <code>
                      {text}
                  </code>
              </pre>
  )
})
