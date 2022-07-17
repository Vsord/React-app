import React from 'react'
import myPostsClass from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={myPostsClass.posts}>
            <h3>My Posts</h3>
            <div className={myPostsClass.posts_newPost}>
                <textarea name="" id="" cols="20" rows="5"></textarea>
                <button>Add post</button>
            </div>
            <Post likes='1 like'  post='post 1' />
            <Post likes='2 likes' post='post 2' />
            <Post likes='3 likes' post='post 3' />
            <Post likes='4 likes' post='post 4' />
        </div>
    )
};

export default MyPosts;