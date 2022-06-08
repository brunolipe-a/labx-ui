import { Card, HeaderPage, MainLayout, Table } from '@labx-ui/admin'
import { useEffect, useMemo, useState } from 'react'

import {
  createTable,
  getCoreRowModel,
  PaginationState,
  useTableInstance,
} from '@tanstack/react-table'

import { api } from '../../services/api'
import { useQuery } from 'react-query'
import { Avatar } from '@chakra-ui/react'

type Person = {
  id: number
  title: string
  firstName: string
  lastName: number
  picture: string
}

const table = createTable().setRowType<Person>()

const columns = [
  table.createDataColumn('id', {}),
  table.createDataColumn('picture', {
    cell: cell => <Avatar src={cell.getValue()} />,
  }),
  table.createDataColumn('title', {}),
  table.createDataColumn('firstName', {}),
  table.createDataColumn('lastName', {}),
]

const fetchUsers = async ({ pageIndex, pageSize }: PaginationState) => {
  const { data } = await api.get('user', {
    params: { page: pageIndex, limit: pageSize },
  })

  return data
}

export default function Users() {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const fetchDataOptions = {
    pageIndex,
    pageSize,
  }

  const { data, isLoading } = useQuery(
    ['data', fetchDataOptions],
    () => fetchUsers(fetchDataOptions),
    { keepPreviousData: true }
  )

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  )

  const instance = useTableInstance(table, {
    data: data?.data ?? [],
    columns,
    pageCount: Math.ceil(data?.total / pageSize) | 0,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
  })

  return (
    <MainLayout pageTitle="Usuários">
      <HeaderPage title="Usuários" />
      <Card>
        <Table instance={instance} isLoading={isLoading} />
      </Card>
    </MainLayout>
  )
}
