import { useEffect, useState } from 'react'
import './ScrollUpButton.css'

const ScrollUpButton = () => {
    const [scrollUpButton, setScrollUpButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 100
                ? setScrollUpButton(true)
                : setScrollUpButton(false)
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {
                scrollUpButton &&
                <button className='scroll-up' onClick={() => scrollUp()}>
                    ^
                </button>
            }
        </>
    )
}

export default ScrollUpButton