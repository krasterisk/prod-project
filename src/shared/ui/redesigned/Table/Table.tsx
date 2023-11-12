import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Table.module.scss'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

interface TableProps<T extends object> {
  data: T[] | undefined
  columns: any[]
  className?: string
  onEdit?: (id: string) => void
}

export const Table = <T extends object>(props: TableProps<T>) => {
  const {
    data = undefined!,
    columns,
    className,
    onEdit
  } = props

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  const handleOnEditClick = (id: string) => {
    if (onEdit) {
      onEdit(id)
    }
  }

  return (
        <div className={classNames(cls.table, {}, [className])}>
            <table>
                <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th key={header.id}>
                                {header.isPlaceholder
                                  ? null
                                  : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                  )}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr
                        key={row.id}
                        onDoubleClick={() => { handleOnEditClick(row.getValue('id')) }}
                    >
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
                <tfoot>
                {table.getFooterGroups().map(footerGroup => (
                    <tr key={footerGroup.id}>
                        {footerGroup.headers.map(header => (
                            <th key={header.id}>
                                {header.isPlaceholder
                                  ? null
                                  : flexRender(
                                    header.column.columnDef.footer,
                                    header.getContext()
                                  )}
                            </th>
                        ))}
                    </tr>
                ))}
                </tfoot>
            </table>
        </div>
  )
}
