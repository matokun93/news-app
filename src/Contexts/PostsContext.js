import { useContext, createContext } from 'react'
import { useOptions } from './OptionsContext';
import useLocalStorage from '../CustomHooks/useLocalStorage';
import usePostsSearch from '../CustomHooks/usePostsSearch';

const PostsContext = createContext()

export const usePosts = () => {
    return useContext(PostsContext)
}

export const PostsProvider = ({ children }) => {
    const {
        posts,
        setPosts,
        favePosts,
        setFavePosts,
        hasMore,
        error,
        loading
    } = usePostsSearch()

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