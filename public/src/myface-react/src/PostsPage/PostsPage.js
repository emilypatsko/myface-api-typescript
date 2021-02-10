import React, { useState, useEffect } from 'react';


function PostsPage() {

    const [myData, setMyData] = useState(null);

    // fetch the data from the backend here (only on first render)
    useEffect(() => {
        fetch("http://localhost:3001/posts")
            .then(response => response.json())
            .then(json => setMyData(json));
    }, []);
    
    // return it!:
    if (!myData) {
        return <div>Loading!</div>
    }
    return (
        <div>
            <h1>Posts</h1>
            <ol>
            {myData.results.map(function(post, index) {
                return <li key = {index}> id = {post.id},
                    Post ID:  {post.id} , 
                    Message:  {post.message} , 
                    Image: {<a href="post.imageUrl" target="_blank">Click here to view image</a>} <br></br>
                    Created:  {post.createdAt}, 
                    Posted by:  {post.postedBy.username} <br></br>
                    Likes:  {post.likedBy.length}, 
                    Dislikes:  {post.dislikedBy.length} 
                </li>})}               
            </ol>
        </div>
    );
}

export {PostsPage};