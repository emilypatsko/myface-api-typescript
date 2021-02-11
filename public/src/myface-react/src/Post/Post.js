import React, { useEffect } from 'react';
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

            <button onClick={() => Like(props.post.id, props.likeButton, props.setLikeButton)}>Like</button>
        </div>);
}

function Like(postId, likeButton, setLikeButton) {
    fetch(`http://localhost:3001/posts/${postId}/like`, {method: 'POST'})
        .then(// rerender the <PostsPage/>
            () => setLikeButton(likeButton+1)
        )
}

export {Post};