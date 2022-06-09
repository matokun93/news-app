import { useOptions, TAB_1 } from "../../Contexts/OptionsContext"
import LayoutPosts from './LayoutPosts/LayoutPosts'
import LayoutFavePosts from './LayoutFavePosts/LayoutFavePosts'
import ScrollUpButton from '../ScrollUpButton/ScrollUpButton'
import './Layouts.css'

const Layouts = () => {
    const { selectedTab } = useOptions()

    return (
        <div className="layouts-container">
            {
                selectedTab === TAB_1
                    ? <LayoutPosts />
                    : <LayoutFavePosts />
            }
            <ScrollUpButton />
        </div>
    )
}

export default Layouts