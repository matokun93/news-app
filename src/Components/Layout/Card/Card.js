import { usePosts } from '../../../Contexts/PostsContext'
import heart from '../../../Assets/iconmonstr-favorite-2.svg'
import filledHeart from '../../../Assets/iconmonstr-favorite-3.svg'


const Card = ({ post }) => {
    const { addFavePost, removeFavePost } = usePosts()

    const handleLikeButton = () => {
        post.liked
            ? removeFavePost(post)
            : addFavePost(post)
    }

    const date = new Date(post.created_at)
    const milliseconds = date.getTime()
    // const seconds = Math.floor((milliseconds / 1000) % 60);
    // const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    // const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
    // const days = Math.floor((milliseconds / 1000 / 60 / 60 / 24) % 30);
    // const months = Math.floor((milliseconds / 1000 / 60 / 60 / 24 / 30) % 12);
    // const years = Math.floor((milliseconds / 1000 / 60 / 60 / 24 / 30 / 12));

    return (
        <div className="Card">
            <h2>{post.story_title}</h2>
            <h3>{post.author}</h3>
            <h5>hace: {milliseconds}</h5>
            <p>{post.story_url}</p>
            <button>
                <img src={post.liked ? filledHeart : heart} alt="" onClick={() => handleLikeButton()} />
            </button>

        </div>
    )
}

export default Card