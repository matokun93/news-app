import { usePosts } from "../../Contexts/PostsContext"
import { useOptions, TAB_1 } from "../../Contexts/OptionsContext"
import Card from './Card/Card'

const Layout = () => {
    const { posts, favePosts } = usePosts()
    const { selectedTab } = useOptions()

    return (
        <div className="layout">
            {
                selectedTab === TAB_1
                    ? posts.map(post =>
                        <Card
                            key={post.objectID}
                            post={post}
                        />
                    )
                    : favePosts.map(post =>
                        <Card
                            key={post.objectID}
                            post={post}
                        />
                    )
            }
        </div>
    )
}

export default Layout