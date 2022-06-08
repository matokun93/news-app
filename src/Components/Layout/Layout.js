import { useRef, useCallback } from 'react'
import { usePosts } from "../../Contexts/PostsContext"
import { useOptions, TAB_1 } from "../../Contexts/OptionsContext"
import Card from './Card/Card'

const Layout = () => {
    const { posts, favePosts, hasMore, loading, error } = usePosts()
    const { selectedTab, pageNumber, setPageNumber } = useOptions()

    const observer = useRef()
    const lastPostElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(pageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    return (
        <div className="layout">
            {
                selectedTab === TAB_1
                    ? posts.map((post, index) =>
                        posts.length === index + 1
                            ? <div key={post.objectID} ref={lastPostElementRef} >
                                <Card
                                    post={post}
                                />
                            </div>
                            :
                            <div key={post.objectID}>
                                <Card
                                    post={post}
                                />
                            </div>
                    )
                    : favePosts.map(post =>
                        <div key={post.objectID}>
                            <Card
                                key={post.objectID}
                                post={post}
                            />
                        </div>
                    )
            }
            <div className="loading"> {loading && <h3>Loading news...</h3>}</div>
            <div className="error"> {error && <h3>Error</h3>}</div>
        </div>
    )
}

export default Layout