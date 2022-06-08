import { useOptions, TAB_1 } from "../../Contexts/OptionsContext"
import LayoutPosts from './LayoutPosts/LayoutPosts'
import LayoutFavePosts from './LayoutFavePosts/LayoutFavePosts'
import ScrollUpButton from '../ScrollUpButton/ScrollUpButton'

const Layouts = () => {
    const { selectedTab } = useOptions()

    return (
        <>
            {
                selectedTab === TAB_1
                    ? <LayoutPosts />
                    : <LayoutFavePosts />
            }
            <ScrollUpButton />
        </>
    )
}

export default Layouts