import { useEffect, useState } from 'react'
import arrowUp from '../../Assets/angle-down-solid.svg'
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
                    <img src={arrowUp} alt='arrowUp-icon' />
                </button>
            }
        </>
    )
}

export default ScrollUpButton