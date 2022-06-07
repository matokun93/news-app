import { useContext, createContext } from 'react'
import { useLocalStorage } from '../CustomHooks/useLocalStorage'
import angularIcon from '../Assets/image-138.png'
import reactIcon from '../Assets/image-140.png'
import vuejsIcon from '../Assets/image-141.png'

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
    const [selectedQueryFilter, setSelectedQueryFilter] = useLocalStorage('selectedQueryFilter', null)
    const [selectedTab, setSelectedTab] = useLocalStorage('selectedTab', TAB_1)

    const changeTab = (tab) => {
        setSelectedTab(tab)
    }
    const changeQueryFilter = (option) => {
        setSelectedQueryFilter(option)
    }

    return (
        <OptionsContext.Provider value={{
            selectedQueryFilter,
            selectedTab,
            changeTab,
            changeQueryFilter
        }}>
            {children}
        </OptionsContext.Provider>
    )
}