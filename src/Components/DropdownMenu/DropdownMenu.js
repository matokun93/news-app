import { useRef, useState } from 'react'
import { useOptions, DROPDOWN_OPTIONS } from '../../Contexts/OptionsContext'
import useClickOutside from '../../CustomHooks/useClickOutside'
import './DropdownMenu.css'
import arrowDown from '../../Assets/angle-down-solid.svg'

const DropdownMenu = () => {
    const { query, changeQuery } = useOptions()
    const [visibleDropdown, setVisibleDropdown] = useState(false)
    const dropdownMenuRef = useRef()

    useClickOutside(dropdownMenuRef, () => {
        hideDropdown()
    })
    const toggleDropdown = () => {
        setVisibleDropdown(!visibleDropdown)
    }
    const hideDropdown = () => {
        setVisibleDropdown(false)
    }
    const handleSelect = (option) => {
        changeQuery(option)
        hideDropdown()
    }

    return (
        <div className="dropdown-menu" ref={dropdownMenuRef}>
            <div className="header" onClick={() => toggleDropdown()}>
                {
                    query ?? 'Select your news'
                }
                <img src={arrowDown} alt="" />
            </div>
            {
                visibleDropdown
                    ? <ul className="body">
                        {DROPDOWN_OPTIONS.map(option =>
                            <li className="option" key={option.id} onClick={() => handleSelect(option.id)}>
                                <img src={option.icon} alt="" />
                                {option.name}
                            </li>
                        )}
                    </ul>
                    : null
            }
        </div>
    )
}

export default DropdownMenu