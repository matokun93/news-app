import { useEffect, useState } from 'react'
import { useOptions } from '../Contexts/OptionsContext'
import useLocalStorage from './useLocalStorage'
import axios from 'axios'

const usePostsSearch = () => {
    const { query, pageNumber } = useOptions()
    const [posts, setPosts] = useState([])
    const [favePosts, setFavePosts] = useLocalStorage('favePosts', [])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setPosts([])
    }, [query])

    useEffect(() => {
        setLoading(true)
        setError(false)
        axios({
            method: 'GET',
            url: 'https://hn.algolia.com/api/v1/search_by_date?',
            params: { query: query, page: pageNumber }
        }).then(res => {
            let filteredPosts = filterPosts(res.data.hits)
            let checkedPosts = checkLikedPosts(filteredPosts)
            console.log(checkedPosts);
            // setPosts(prevPosts => {
            //     return [...prevPosts, checkedPosts]
            // })
            setPosts(checkedPosts)
            setHasMore(res.data.hits.length > 0)
            setLoading(false)
        })
    }, [query, pageNumber])

    const filterPosts = (posts) => {
        let filteredPosts = posts.filter(post => post.story_title && post.author && post.story_url && post.created_at)
        return filteredPosts
    }

    const checkLikedPosts = (filteredPosts) => {
        let checkedPosts = filteredPosts.map(post => {
            return {
                objectID: post.objectID,
                story_title: post.story_title,
                author: post.author,
                url: post.story_url,
                created_at: post.created_at,
                liked: favePosts.some(e => e.objectID === post.objectID)
            }
        })
        return checkedPosts
    }

    return { posts, setPosts, favePosts, setFavePosts, hasMore, loading, error, }
}

export default usePostsSearch