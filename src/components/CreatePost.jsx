import { useContext, useRef } from "react";
import {PostList} from '../store/post-list-store'
const CreatePost = () => {

    const { addPost }=useContext(PostList)

    const userIdElement=useRef();
    const postTitleElement=useRef();
    const postBodyElement=useRef();
    const likesElement=useRef();
    const commentsElement=useRef();
    const tagsElement=useRef();
    const formRef=useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const likes = parseInt(likesElement.current.value);
        const comments = parseInt(commentsElement.current.value);
        const tags = tagsElement.current.value.split(' ');

        addPost(userId, postTitle, postBody, likes,comments, tags);
        formRef.current.reset();
    }

    return (
    <form className="create-post" ref={formRef} onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="userId" className="form-label">User Id</label>
            <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder="Enter your userId here: "/>
        </div>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Post Title</label>
            <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="How are you feeling today..."/>
        </div>
        <div className="mb-3">
            <label htmlFor="body" className="form-label">Post Content</label>
            <textarea rows="5" ref={postBodyElement} type="text" className="form-control" id="body" placeholder="Tell us more about it."/>
        </div>
        <div className="mb-3">
            <label htmlFor="likes" className="form-label">Number of Likes</label>
            <input type="text" ref={likesElement} className="form-control" id="likes" placeholder="How many people has liked this post?"/>
        </div>
        <div className="mb-3">
            <label htmlFor="comments" className="form-label">Number of Comments</label>
            <input type="text" ref={commentsElement} className="form-control" id="comments" placeholder="How many people has commented on this post?"/>
        </div>
        <div className="mb-3">
            <label htmlFor="tags" className="form-label">Enter your hashtags here.</label>
            <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Please enter tags using space. "/>
        </div>
        
        <button type="submit" className="btn btn-primary">Post</button>
    </form>
    )
}

export default CreatePost;