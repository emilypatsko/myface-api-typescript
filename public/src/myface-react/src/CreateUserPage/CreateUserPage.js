import React, {useState} from 'react';

function CreateUserPage() {

    const [name, setName] = useState(null)
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [picUrl, setPicUrl] = useState(null);
    const [coverPicUrl, setCoverPicUrl] = useState(null);

    const submitForm = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/users/create`,
                {method: 'POST',
                body: JSON.stringify({"name": name, 
                                      "username": username,
                                      "email": email,
                                      "profileImageUrl": picUrl,
                                      "coverImageUrl": coverPicUrl
                                    }),
                headers: {'Content-Type': 'application/json'},
                }
                ).then(response => response.json())
                .then(json => console.log(json));
    };

    return (
        <div>
            <h1>Create New User</h1>
            <form>
                Name: <input type = "text" onInput = {(e) => setName(e.target.value)} required />
                Username: <input type = "text" onInput = {(e) => setUsername(e.target.value)} required />
                Email: <input type = "email" onInput = {(e) => setEmail(e.target.value)} required />
                Profile picture URL: <input type = "text" onInput = {(e) => setPicUrl(e.target.value)} required />
                Cover picture URL: <input type = "text" onInput = {(e) => setCoverPicUrl(e.target.value)} required />

                <button onClick = {submitForm}>Create!</button>
            </form>
        </div>
    )
}

export {CreateUserPage};