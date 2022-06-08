import { useEffect, useState, useCallback } from 'react'
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

    const filterPosts = (posts) => {
        let filteredPosts = posts.filter(post => post.story_title && post.author && post.story_url && post.created_at)
        return filteredPosts
    }

    const checkLikedPosts = useCallback((filteredPosts) => {
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
    }, [])

    useEffect(() => {
        console.log('entro al usefefct peque;o');
        setPosts([])
        console.log('se seteo el posts en vacio');
    }, [query])

    useEffect(() => {
        console.log('entro al useffect grande');
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method: 'GET',
            url: 'https://hn.algolia.com/api/v1/search_by_date?',
            params: { query: query, page: pageNumber },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            let filteredPosts = filterPosts(res.data.hits)
            let checkedPosts = checkLikedPosts(filteredPosts)
            setPosts(prevPosts => {
                // return [...new Set([...prevPosts, ...checkedPosts])]
                return [...prevPosts, ...checkedPosts]
            })
            setHasMore(res.data.hits.length > 0)
            setLoading(false)
        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
        console.log('se busco la nueva data');
    }, [pageNumber, query])

    return { posts, setPosts, favePosts, setFavePosts, hasMore, loading, error, }
}

export default usePostsSearch