import React, { useState } from 'react'

type AuthUser = {
    name: string;
    email: string
}

const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser);
    const handleLogin = () => {
        setUser(
            {
                name: "Dat",
                email: "dathoang9797@gmail.com",

            })
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {user.email}</div>
            <div>User email is {user.name}</div>
        </div>
    )
}

export default User