import React from 'react';

function CreateUserPage() {
    return (
        <div>
            <h1>Create New User</h1>
            <form>
                Name: <input type = "text" required />
                Username: <input type = "text" required />
                Email: <input type = "email" required />
                Profile picture URL: <input type = "text" required />
                Cover picture URL: <input type = "text" required />

                <button>Create!</button>
            </form>
        </div>
    )
}

export {CreateUserPage};