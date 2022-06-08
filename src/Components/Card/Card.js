import { usePosts } from '../../Contexts/PostsContext'
import useCalculateTime from '../../CustomHooks/useCalculateTime'
import heartIcon from '../../Assets/iconmonstr-favorite-2.svg'
import filledHeartIcon from '../../Assets/iconmonstr-favorite-3.svg'
import timeIcon from '../../Assets/iconmonstr-time-2.svg'
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
                    <p><img src={timeIcon} alt='time-icon' />{timePassed.time}{timePassed.unit} ago by {post.author}</p>
                    <h1>{post.story_title}</h1>
                </div>
            </a>
            <button onClick={() => handleLikeButton()}>
                <img src={post.liked ? filledHeartIcon : heartIcon} alt='heart-icon' />
            </button>
        </div>
    )
}

export default Card