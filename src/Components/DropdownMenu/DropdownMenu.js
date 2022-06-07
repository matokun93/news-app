import { useRef, useState } from 'react'
import { useOptions, DROPDOWN_OPTIONS } from '../../Contexts/OptionsContext'
import useClickOutside from '../../CustomHooks/useClickOutside'
import './DropdownMenu.css'
import arrowDown from '../../Assets/angle-down-solid.svg'

const DropdownMenu = () => {
    const { changeQueryFilter, selectedQueryFilter } = useOptions()
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
        changeQueryFilter(option)
        hideDropdown()
    }

    return (
        <div className="dropdown-menu" ref={dropdownMenuRef}>
            <div className="dropdown-header" onClick={() => toggleDropdown()}>
                {
                    selectedQueryFilter ?? 'Select your news'
                }
                <img src={arrowDown} alt="" />
            </div>
            {
                visibleDropdown
                    ? <ul className="dropdown-body">
                        {DROPDOWN_OPTIONS.map(option =>
                            <li className="dropdown-option" key={option.id} onClick={() => handleSelect(option.id)}>
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