import { useState } from 'react'
import { usePosts } from '../../Contexts/PostsContext'
import { TAB_2, useOptions } from '../../Contexts/OptionsContext'
import useCalculateTime from '../../CustomHooks/useCalculateTime'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular, faClockFour } from '@fortawesome/free-regular-svg-icons'
import './Card.css'

const Card = ({ post }) => {
    const { addFavePost, removeFavePost } = usePosts()
    const { timePassed } = useCalculateTime(post.created_at)
    const { selectedTab } = useOptions()
    const [postLiked, setPostLiked] = useState(post.liked)

    const handleLikeButton = () => {
        if (post.liked) {
            setPostLiked(false)
            selectedTab === TAB_2
                ? setTimeout(() => {
                    removeFavePost(post)
                }, 200)
                : removeFavePost(post)
            return
        }
        addFavePost(post)
    }

    return (
        <div className={!postLiked && selectedTab === TAB_2 ? 'card faded' : 'card'}>
            <a href={post.url} target='_blank' rel="noreferrer">
                <div className="body">
                    <p>
                        <span className="time-icon">
                            <FontAwesomeIcon icon={faClockFour} />
                        </span>
                        {timePassed.time} {timePassed.unit} ago by {post.author}
                    </p>
                    <h1>{post.story_title}</h1>
                </div>
            </a>
            <button onClick={() => handleLikeButton()}>
                <span className='heart-icon'>
                    <FontAwesomeIcon icon={post.liked ? faHeart : faHeartRegular} />
                </span>
            </button>
        </div>
    )
}

export default Card