import { usePosts } from "../../../Contexts/PostsContext"
import Card from '../../Card/Card'

const LayoutFavePosts = () => {
    const { favePosts } = usePosts()

    return (
        <div className="layout-container">
            <div className="layout">
                {
                    favePosts.map(favePost =>
                        <div key={favePost.objectID} >
                            <Card
                                post={favePost}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default LayoutFavePosts