import React from 'react';
import '../css/Post.scss';

function Post(props) {
    return (
        <div className='singlePost'>
            <p>{props.post.postedBy.username}</p>
            <p>{props.post.createdAt}</p>
            <img src = {props.post.imageUrl}/>
            <p>Likes: {props.post.likedBy.length}</p>
            <p>Dislikes: {props.post.dislikedBy.length}</p>
            <p>{props.post.message}</p>
        </div>);
}

export {Post};