import { useContext, createContext, useState } from 'react'
import useLocalStorage from '../CustomHooks/useLocalStorage'
import angularIcon from '../Assets/image-138@3x.png'
import reactIcon from '../Assets/image-140@3x.png'
import vuejsIcon from '../Assets/image-141@3x.png'

const OptionsContext = createContext()

export const useOptions = () => {
    return useContext(OptionsContext)
}

export const TAB_1 = 'All'
export const TAB_2 = 'My faves'
export const DROPDOWN_OPTIONS = [
    {
        id: 'angular',
        name: 'Angular',
        icon: angularIcon
    },
    {
        id: 'reactjs',
        name: 'React',
        icon: reactIcon
    },
    {
        id: 'vuejs',
        name: 'VueJs',
        icon: vuejsIcon
    }
]

export const OptionsProvider = ({ children }) => {
    const [pageNumber, setPageNumber] = useState(0)
    const [query, setQuery] = useLocalStorage('query', null)
    const [selectedTab, setSelectedTab] = useLocalStorage('selectedTab', TAB_1)

    const changeTab = (tab) => {
        setSelectedTab(tab)
    }

    const changeQuery = (option) => {
        if (query !== option) {
            setPageNumber(0)
        }
        setQuery(option)
    }

    return (
        <OptionsContext.Provider value={{
            query,
            selectedTab,
            pageNumber,
            setPageNumber,
            changeTab,
            changeQuery
        }}>
            {children}
        </OptionsContext.Provider>
    )
}