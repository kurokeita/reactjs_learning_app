import React, { useState, useEffect } from 'react'

function Time(props) {
    const [time, setTime] = useState((new Date()).toLocaleTimeString())

    useEffect(() => {
        const timer = setInterval(
            () => {
                setTime((new Date()).toLocaleTimeString())
            },
            props.interval
        )
        return () => {
            clearInterval(timer)
        }
    })

    return (
        <span>The time is: {time}</span>
    )
}

export default Time