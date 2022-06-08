import { useState, useEffect } from 'react'

const useCalculateTime = (date) => {
    const [timePassed, setTimePassed] = useState({})

    useEffect(() => {
        let initialDate = Math.abs((new Date(date).getTime() / 1000).toFixed(0))
        let currentDate = Math.abs((new Date().getTime() / 1000).toFixed(0))
        let diff = currentDate - initialDate
        let years = Math.floor(diff / 31104000)
        if (years > 0) return setTimePassed({ time: years, unit: years === 1 ? 'year' : 'years' })
        let months = Math.floor(diff / 2592000) % 12
        if (months > 0) return setTimePassed({ time: months, unit: months === 1 ? 'month' : 'months' })
        let days = Math.floor(diff / 86400) % 30
        if (days > 0) return setTimePassed({ time: days, unit: days === 1 ? 'day' : 'days' })
        let hours = Math.floor(diff / 3600) % 24
        if (hours > 0) return setTimePassed({ time: hours, unit: hours === 1 ? 'hour' : 'hours' })
        let minutes = Math.floor(diff / 60) % 60
        if (minutes > 0) return setTimePassed({ time: minutes, unit: minutes === 1 ? 'minute' : 'minutes' })
        let seconds = diff % 60
        return setTimePassed({ time: seconds, unit: seconds === 1 ? 'second' : 'seconds' })
    }, [date])

    return { timePassed }
}

export default useCalculateTime