import { useEffect, useState } from 'react'

export function useStatistics(dataPointCount: number) {
  const [value, setValue] = useState<Statistics[]>([])
  useEffect(() => {
    const unsub = window.electron.subscribeStatistics((stats) =>
      setValue((pre) => {
        const newData = [...pre, stats]
        if (newData.length > dataPointCount) {
          newData.shift()
        }
        return newData
      })
    )
    return unsub
  }, [])
  return value
}