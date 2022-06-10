import { useRef, useState } from 'react'
import { useOptions, DROPDOWN_OPTIONS } from '../../Contexts/OptionsContext'
import useClickOutside from '../../CustomHooks/useClickOutside'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import './DropdownMenu.css'

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
                {query === 'reactjs' ? <span>React </span> : null}
                {query === 'angular' ? <span>Angular</span> : null}
                {query === 'vuejs' ? <span>VueJs </span> : null}
                <FontAwesomeIcon icon={faAngleDown} />
            </div>
            {
                visibleDropdown
                    ? <ul className="body">
                        {DROPDOWN_OPTIONS.map(option =>
                            <li className="option" key={option.id} onClick={() => handleSelect(option.id)}>
                                <img src={option.icon} alt="option-icon" />
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