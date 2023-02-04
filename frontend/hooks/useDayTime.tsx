import { useEffect, useState } from 'react'

const hours = new Date().getHours()

const isDay = (hours: number) => hours > 8 && hours < 18

export const useDayTime = () => {
  const [isDayTime, setDayTime] = useState(isDay(hours))

  useEffect(() => {
    const timerId = setInterval(() => {
      const now = new Date()
      setDayTime(isDay(now.getHours()))
    }, 60000)
    return () => {
      clearInterval(timerId)
    }
  })

  return isDayTime ? 'day' : 'night'
}
