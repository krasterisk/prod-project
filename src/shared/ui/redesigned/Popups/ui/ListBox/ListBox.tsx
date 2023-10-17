import { Fragment, ReactNode, useState } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { HStack } from '../../../../redesigned/Stack'
import { Button } from '../../../Button/Button'
import cls from './ListBox.module.scss'
import { DropdownDirection } from '@/shared/types/ui'
import { mapDirectionClass } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg'
import { Icon } from '../../../Icon'

export interface ListBoxItem<T extends string> {
  value: T
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps<T extends string> {
  items?: Array<ListBoxItem<T>>
  className?: string
  value?: T
  defaultValue?: string
  onChange?: (value: T) => void
  readonly?: boolean
  direction?: DropdownDirection
  label?: string
  multiple?: boolean
}

export function ListBox<T extends string> (props: ListBoxProps<T>) {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom-left',
    label,
    multiple = false
  } = props

  const optionsClasses = [mapDirectionClass[direction], popupCls.menu]

  const [selectedItems, setSelectedItems] = useState<T[]>(items ? [items[0]?.value] : [])

  const handleOnChange = (values: T[]) => {
    setSelectedItems(values)
    if (onChange) {
      if (props.multiple) {
        values.forEach((value) => {
          onChange(value)
        })
      } else {
        onChange(values[0])
      }
    }
  }
  const SelectedItems = ({ values }: { values: string[] }) => {
    return <>{values.join(', ')}</>
  }

  // const selectedItem = useMemo(() => {
  //   return items?.find(item => item.value === value)
  // }, [items, value])

  // console.log(selectedItems)

  return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
                value={multiple ? selectedItems : value}
                onChange={multiple ? handleOnChange : onChange}
                multiple={multiple}
            >
                <HListBox.Button as={'div'} className={cls.trigger}>
                    <Button disabled={readonly} variant="filled" addonRight={<Icon Svg={ArrowIcon}/>}>
                        {multiple && selectedItems.length > 0
                          ? (
                                <SelectedItems values={selectedItems}/>
                            )
                          : (
                              defaultValue
                            )}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({
                              active,
                              selected
                            }) => (
                                <li
                                    className={classNames(
                                      cls.item,
                                      {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                        [popupCls.selected]: selected
                                      }
                                    )}
                                >
                                    {selected}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
  )
}
