import { useRef, useCallback } from 'react'
import { usePosts } from "../../../Contexts/PostsContext"
import { useOptions } from "../../../Contexts/OptionsContext"
import Card from '../../Card/Card'
import DropdownMenu from '../../DropdownMenu/DropdownMenu'
import './LayoutPosts.css'

const LayoutPosts = () => {
    const { posts, hasMore, loading, error } = usePosts()
    const { pageNumber, setPageNumber } = useOptions()

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
    }, [loading, hasMore, setPageNumber, pageNumber])

    return (
        <>
            <div className="layout-container">
                <DropdownMenu />
                <div className="layout">
                    {
                        posts.map((post, index) =>
                            <div key={post.objectID} ref={posts.length === index + 1 ? lastPostElementRef : null} >
                                <Card
                                    post={post}
                                />
                            </div>
                        )
                    }
                </div>

                {loading && <div className='loading'>Loading news...</div>}
                {error && <div className='error'>{error}</div>}
            </div>
        </>
    )
}

export default LayoutPosts