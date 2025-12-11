import { useContext,useState } from "react";
import Post from "./Post"
import {PostList as PostListData} from "../store/post-list-store"
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
    const { postList, addInitialPosts } = useContext(PostListData)
    const [ fetching, setFetching ] = useState(false);
    const handleGetPostsClick = () => {
        setFetching(true)
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => {
                addInitialPosts(
                    data.posts.map(p => ({
                        ...p,
                        likes:  p.reactions.likes,
                        comments:  p.reactions.dislikes,
                        userId: String(p.userId)
                    }))
                )
                setFetching(false);
            })
    }
    return <>
        {fetching && <LoadingSpinner/>}
        {!fetching && postList.length===0 && <WelcomeMsg onGetPostsClick={handleGetPostsClick}></WelcomeMsg>}
        {!fetching && postList.map((post) => (
            <Post key={post.id} post={post} />
        ))}
    </>
}

export default PostList;