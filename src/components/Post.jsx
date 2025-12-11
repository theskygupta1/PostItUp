import { useContext } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { PostList } from "../store/post-list-store";
import { BiSolidLike } from "react-icons/bi";
import { FaComments } from "react-icons/fa";
import { PiShareFatFill } from "react-icons/pi";
const Post = ({ post }) => {

    const { deletePost } = useContext(PostList);

    return <>
    <div className="card post-card" >
        <div className="card-body">
                <h5 className="card-title">{post.title}
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>{deletePost(post.id)}}><RiDeleteBin5Line /></span>
                </h5>
                <p className="card-text">{post.body}</p>
                {post.tags.map(tag => <span key={tag} className="badge text-bg-primary postTag">#{tag}</span>)}
                <div className="alert alert-info reactions" role="alert">
                    <span>
                       <BiSolidLike /> {post.likes}
                    </span>
                    <span>
                       <FaComments /> {post.comments}
                    </span>
                    <span>
                       <PiShareFatFill /> {Math.floor((post.likes+post.comments)/2)}
                    </span>
                </div>
        </div>
     </div>
    </>
}

export default Post;