import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ManualBlockCodeComponent.module.scss'
import { memo } from 'react'
import { ManualCodeBlock } from '../../model/types/manual'
import { Code } from '@/shared/ui/Code'

interface ManualBlockCodeComponentProps {
  className?: string
  block: ManualCodeBlock
}

export const ManualBlockCodeComponent = memo(({ className, block }: ManualBlockCodeComponentProps) => {
  return (
        <div className={classNames(cls.ManualBlockCodeComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
  )
})
