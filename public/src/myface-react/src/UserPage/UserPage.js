import React, { useState, useEffect } from 'react';
import {UserPosts} from '../UserPosts/UserPosts.js';
import {useParams} from 'react-router-dom';

function UserPage() {

    let {userId} = useParams();
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
            <h1>{myData.name}'s Profile</h1>
            <h2>{myData.username}</h2>
            <h2>{myData.email}</h2>
            <img src={myData.coverImageUrl}/>
            <img src={myData.profileImageUrl}/>

            <h1>{myData.name}'s Posts</h1>       
            <UserPosts posts = {myData.posts}/>   
        </div>
    );
}

export {UserPage};