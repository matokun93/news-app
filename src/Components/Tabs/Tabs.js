import { useOptions, TAB_1, TAB_2 } from '../../Contexts/OptionsContext'
import './Tabs.css'

const Tabs = () => {
    const { changeTab, selectedTab } = useOptions()

    return (
        <div className="tabs">
            <div data-selected={selectedTab === TAB_1 ? true : false}
                onClick={() => changeTab(TAB_1)}>
                {TAB_1}
            </div>
            <div data-selected={selectedTab === TAB_2 ? true : false}
                onClick={() => changeTab(TAB_2)}>
                {TAB_2}
            </div>
        </div>
    )
}

export default Tabs
