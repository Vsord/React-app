import React from "react";
import postClass from './Post.module.css'


const Post = (props) => {
    return (
        <div className={postClass.posts_postItem}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZX1XIzYIwFpzhRXACezHJAweBpBpumPcvrw&usqp=CAU" alt="" />
            {props.post}
            <div>
                <span>{props.likes}</span>
            </div>
        </div>
    )
};

export default Post;