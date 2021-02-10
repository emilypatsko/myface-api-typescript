import React from 'react';

function PostsList(props) {
    return (
        <ol>
            {props.posts.map(function(post, index) {
                return <li key = {index}> 
                    Post ID: {post.id} , 
                    Message: {post.message} , 
                    Image: {<a href="post.imageUrl" target="_blank">Click here to view image</a>} <br></br>
                    Created: {post.createdAt}, 
                    Posted by: {post.postedBy.username} <br></br>
                    Likes: {post.likedBy.length}, 
                    Dislikes: {post.dislikedBy.length} 
                </li>})}               
            </ol>
    )
}

export {PostsList};