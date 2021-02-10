import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './PostsPage.css';

function PostsPage() {

    const [myData, setMyData] = useState(null);
    const [page, setPage] = useState(1);

    // fetch the data from the backend here (only on first render)
    useEffect(() => {
        fetch(`http://localhost:3001/posts/?page=${page}&pageSize=10`)
            .then(response => response.json())
            .then(json => setMyData(json));
    }, [page]);
    
    // return it!:
    if (!myData) {
        return <div>Loading!</div>
    }
    return (
        <div>
            <h1>Posts</h1>
            <ol>
            {myData.results.map(function(post, index) {
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
   
            <button className = {myData.next ? "" : "invisible-button"} onClick={() => myData.next ? setPage(page+1) : setPage(page)}>Next</button>
            <button className = {myData.previous ? "" : "invisible-button"} onClick={() => myData.previous ? setPage(page-1) : setPage(page)}>Previous</button>

        </div>
    );
}

export {PostsPage};