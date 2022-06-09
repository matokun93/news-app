import { usePosts } from '../../Contexts/PostsContext'
import useCalculateTime from '../../CustomHooks/useCalculateTime'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular, faClockFour } from '@fortawesome/free-regular-svg-icons'
import './Card.css'

const Card = ({ post }) => {
    const { addFavePost, removeFavePost } = usePosts()
    const { timePassed } = useCalculateTime(post.created_at)

    const handleLikeButton = () => {
        post.liked
            ? removeFavePost(post)
            : addFavePost(post)
    }

    return (
        <div className="card">
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
            <div className='heart-image'>

            </div>
            <button onClick={() => handleLikeButton()}>
                <div className='heart-icon'>
                    <FontAwesomeIcon icon={post.liked ? faHeart : faHeartRegular} />
                </div>
            </button>
        </div>
    )
}

export default Card