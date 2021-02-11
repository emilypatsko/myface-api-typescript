import React from 'react';
import {Post} from '../Post/Post.js';

function PostsList(props) {
    return (
        <ol>
            {props.posts.map(function(post, index) {
                return <Post post = {post} index = {index}/>})}               
        </ol>
    )
}

export {PostsList};