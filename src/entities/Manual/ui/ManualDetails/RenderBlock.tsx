import { ManualBlock } from '../../model/types/manual'
import { ManualBlockTypes } from '../../model/consts/consts'
import { ManualBlockTextComponent } from '../ManualBlockTextComponent/ManualBlockTextComponent'
import cls from './ManualDetails.module.scss'
import { ManualBlockCodeComponent } from '../ManualBlockCodeComponent/ManualBlockCodeComponent'
import { ManualBlockImageComponent } from '../ManualBlockImageComponent/ManualBlockImageComponent'

export const renderManualBlock = (block: ManualBlock) => {
  switch (block.type) {
    case ManualBlockTypes.TEXT:
      return <ManualBlockTextComponent className={cls.block} block={block} key={Math.random() * 123}/>
    case ManualBlockTypes.CODE:
      return <ManualBlockCodeComponent className={cls.block} block={block} key={block.code}/>
    case ManualBlockTypes.IMAGE:
      return <ManualBlockImageComponent className={cls.block} block={block} key={block.src}/>
    default:
      return null
  }
}
