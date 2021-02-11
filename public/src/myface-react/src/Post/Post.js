import React from 'react';

function Post(props) {

    return <li key = {props.index}> 
                    Post ID: {props.post.id} , 
                    Message: {props.post.message} , 
                    Image: {<a href="post.imageUrl" target="_blank">Click here to view image</a>} <br></br>
                    Created: {props.post.createdAt}, 
                    Posted by: {props.post.postedBy.username} <br></br>
                    Likes: {props.post.likedBy.length}, 
                    Dislikes: {props.post.dislikedBy.length} 
                </li>

}

export {Post};