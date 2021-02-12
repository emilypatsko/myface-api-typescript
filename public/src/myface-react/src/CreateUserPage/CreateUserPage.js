import React, {useState} from 'react';
import '../css/CreateUserPage.scss';

function CreateUserPage() {

    const [name, setName] = useState(null)
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [picUrl, setPicUrl] = useState(null);
    const [coverPicUrl, setCoverPicUrl] = useState(null);
    const [requestResult, setRequestResult] = useState(null);
    const [errors, setErrors] = useState([]);

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
                .then(json => {
                    setRequestResult(json)
                    console.log(json)
                    if (json.status) {
                        handleReset()
                        setErrors([])
                    } else if (json.errors) {
                        setErrors(json.errors.map(error => error.param))
                    }
                });
    };

    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "")
        );
    }

    return (
        <div>
            <h1>Create New User</h1>
            <form>
                Name: <input type = "text" onInput = {(e) => setName(e.target.value)} pattern = "[A-Za-z]+ [A-Za-z]+" required />
                Username: <input type = "text" onInput = {(e) => setUsername(e.target.value)} required />
                Email: <input type = "email" onInput = {(e) => setEmail(e.target.value)} required />
                Profile picture URL: <input type = "text" onInput = {(e) => setPicUrl(e.target.value)} required />
                Cover picture URL: <input type = "text" onInput = {(e) => setCoverPicUrl(e.target.value)} required />

                <button onClick = {submitForm}>Create!</button>
            </form>

            <p className = {errors.includes("name") ? "" : "no-display-error"}>Invalid name.</p>
            <p className = {errors.includes("username") ? "" : "no-display-error"}>Invalid username.</p>
            <p className = {errors.includes("email") ? "" : "no-display-error"}>Invalid email address.</p>
            <p className = {errors.includes("profileImageUrl") ? "" : "no-display-error"}>Invalid profile image URL.</p>
            <p className = {errors.includes("coverImageUrl") ? "" : "no-display-error"}>Invalid cover image URL.</p>
            <p className = {requestResult && requestResult.status ? "" : "no-display-error"}>Success!</p>
        </div>
    )
}

export {CreateUserPage};