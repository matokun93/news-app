import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
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
                    <FontAwesomeIcon icon={faAngleUp} />
                </button>
            }
        </>
    )
}

export default ScrollUpButton