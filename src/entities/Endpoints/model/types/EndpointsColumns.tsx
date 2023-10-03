import { createColumnHelper } from '@tanstack/react-table'
import React from 'react'
import { Endpoint } from './endpoints'

const columnHelper = createColumnHelper<Endpoint>()

export const endpointsColumns = [
  columnHelper.accessor('endpoint_id', {
    cell: info => info.getValue()
  }),
  columnHelper.accessor(row => row.username, {
    id: 'UserName',
    cell: info => <i>{info.getValue()}</i>,
    header: () => 'Username'
  }),
  columnHelper.accessor('context', {
    header: () => 'Context',
    cell: info => info.renderValue()
  }),
  columnHelper.accessor('password', {
    header: () => 'password'
  }),
  columnHelper.accessor('vpbx_user_id', {
    header: 'Vpbx_user_id'
  })
]
