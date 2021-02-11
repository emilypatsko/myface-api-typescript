import React from 'react';
import {Post} from '../Post/Post.js';

function PostsList(props) {
    return (
        <div className = "postsContainer" >
            {props.posts.map(function(post, index) {
                return <Post post = {post} index = {index}/>})}     
        </div>          
    )
}

export {PostsList};