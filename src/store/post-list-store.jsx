import { createContext, useId, useReducer } from "react";

export const DEFAULT_CONTEXT = {
    postList: [],
    addPost: () => { },
    addInitialPosts: () => { },
    deletePost: () => { },
}

export const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (curPostList, action) => {
    let newPostList = curPostList;
    if (action.type === 'DELETE_POST') {
        newPostList=curPostList.filter(post=>post.id!==action.payload.postId)
    }
    else if (action.type === 'ADD_POST') {
        newPostList=[action.payload,...curPostList]
    }
    else if (action.type === 'ADD_INITIAL_POSTS') {
        newPostList = action.payload.posts;
    }
    return newPostList;
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer,[]);
    const addPost = (userId, postTitle, postBody, likes,comments, tags) => {
        dispatchPostList({
            type: 'ADD_POST',
            payload:{
                id:Date.now(),
                title:postTitle,
                body:postBody,
                likes: likes,
                comments: comments,
                userId:userId,
                tags:tags
            }
        })
    }
    const addInitialPosts = (posts) => {
        dispatchPostList({
            type: 'ADD_INITIAL_POSTS',
            payload:{
                posts,
            }
        })
    }
    const deletePost = (postId) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload:{
                postId,
            }
        })
    }
    return <PostList.Provider value={
        {
            postList: postList,
            addPost: addPost,
            addInitialPosts: addInitialPosts,
            deletePost: deletePost
        }
    }>
            {children}
        </PostList.Provider>
}


export default PostListProvider;