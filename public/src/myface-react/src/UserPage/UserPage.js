import React, { useState, useEffect } from 'react';
import {PostsList} from '../PostsList/PostsList.js';
import {BrowserRouter as useParams} from 'react-router-dom';

function UserPage() {

    let userId = useParams();
    const [myData, setMyData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/users/${userId}`)
            .then(response => response.json())
            .then(json => setMyData(json));
    }, []);
    
    // return it!:
    if (!myData) {
        return <div>Loading!</div>
    }
    return (
        <div>
            <h1>{myData.name}</h1>
            <h1>Posts</h1>
            <PostsList posts = {myData.posts}/>   
        </div>
    );
}

export {UserPage};