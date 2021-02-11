import React, { useState, useEffect } from 'react';
import {PostsList} from '../PostsList/PostsList.js';
import './PostsPage.scss';
import '../css/PostsList.scss';

function PostsPage() {

    const [myData, setMyData] = useState(null);
    const [page, setPage] = useState(1);
    const [likeButton, setLikeButton] = useState(0);

    // fetch the data from the backend here (only on first render)
    useEffect(() => {
        console.log("I'm making a fetch request!");
        fetch(`http://localhost:3001/posts/?page=${page}&pageSize=10`)
            .then(response => response.json())
            .then(json => setMyData(json));
    }, [page, likeButton]);
    
    // return it!:
    if (!myData) {
        return <div>Loading!</div>
    }
    return (
        <div>
            <h1>Posts</h1>
            <PostsList posts = {myData.results} likeButton = {likeButton} setLikeButton = {setLikeButton}/>   
            <button className = {myData.next ? "" : "invisible-button"} onClick={() => myData.next ? setPage(page+1) : setPage(page)}>Next</button>
            <button className = {myData.previous ? "" : "invisible-button"} onClick={() => myData.previous ? setPage(page-1) : setPage(page)}>Previous</button>

        </div>
    );
}

export {PostsPage};