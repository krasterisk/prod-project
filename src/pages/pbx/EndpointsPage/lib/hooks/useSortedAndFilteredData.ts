import { useState, useEffect } from 'react'
import { Endpoint, EndpointSortField } from '@/entities/Pbx'

export function useSortedAndFilteredData (data: Endpoint[] = [], sort: EndpointSortField, search?: string) {
  const [sortedAndFilteredData, setSortedAndFilteredData] = useState<Endpoint[]>([])

  useEffect(() => {
    let result = [...data]

    if (sort) {
      result.sort((a, b) => String(a[sort]).localeCompare(String(b[sort])))
    }
    if (search) {
      result = result.filter(item => {
        return Object.keys(item).some(key =>
          key !== 'id' &&
            item[key as keyof Endpoint] &&
            String(item[key as keyof Endpoint]).toLowerCase().includes(search.toLowerCase())
        )
      })
    }
    setSortedAndFilteredData(result)
  }, [data, search, sort])

  return sortedAndFilteredData
}
