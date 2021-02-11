import React from 'react';
import {Post} from '../Post/Post.js';

function PostsList(props) {

    return (
        <div className = "postsContainer" >
            {props.posts.map(function(post, index) {
                return <Post post = {post} index = {index} likeButton = {props.likeButton} setLikeButton = {props.setLikeButton}/>})}     
        </div>          
    )
}

export {PostsList};