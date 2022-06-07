import { useContext, createContext } from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useOptions } from './OptionsContext';
import { useLocalStorage } from '../CustomHooks/useLocalStorage';

const PostsContext = createContext()

export const usePosts = () => {
    return useContext(PostsContext)
}

export const PostsProvider = ({ children }) => {
    const { selectedQueryFilter } = useOptions()
    const [posts, setPosts] = useState([])
    const [favePosts, setFavePosts] = useLocalStorage('favePosts', [])

    useEffect(() => {
        axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${selectedQueryFilter}&page=0`)
            .then(
                res => {
                    let results = res.data.hits
                    let filteredPosts = filterPosts(results)
                    let checkedPosts = checkLikedPosts(filteredPosts)
                    setPosts(checkedPosts)
                }
            )
    }, [selectedQueryFilter])

    const filterPosts = (posts) => {
        let filteredPosts = posts.filter(post => post.story_title && post.author && post.story_url && post.created_at)
        return filteredPosts
    }

    const checkLikedPosts = (filteredPosts) => {
        let checkedPosts = filteredPosts.map(post => {
            return { ...post, liked: favePosts.some(e => e.objectID === post.objectID) }
        })
        return checkedPosts
    }

    const addFavePost = (post) => {
        setFavePosts([...favePosts, { ...post, liked: true }])
        setPosts(
            posts.map(item => {
                if (item.objectID === post.objectID) {
                    return { ...item, liked: true }
                }
                return item
            })
        )
    }

    const removeFavePost = (post) => {
        setFavePosts(favePosts.filter(favePost => favePost.objectID !== post.objectID))
        setPosts(
            posts.map(item => {
                if (item.objectID === post.objectID) {
                    return { ...item, liked: false }
                }
                return item
            })
        )
    }

    return (
        <PostsContext.Provider value={{
            posts,
            favePosts,
            addFavePost,
            removeFavePost,
        }}>
            {children}
        </PostsContext.Provider>
    )
}