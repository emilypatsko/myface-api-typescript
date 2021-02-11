import React from 'react';

function UserPosts(props) {
    return (
        <div>
            {props.posts.map(function(post) {
                return (<div>
                    <img src={post.imageUrl}/><br></br>
                    {post.message}<br></br>
                    Posted on: {post.createdAt}
                    </div>
                    )
                }
                )
            } 
            </div> 
    )             
}

export {UserPosts};