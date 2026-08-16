import React, { useContext } from 'react'
import UserContext from '../Context/UserContext';

const Profile = () => {
    const { user } = useContext(UserContext); // accepting data

    if(!user) return <div>Please Login</div>
    
    return <div>Welcome {user.username}</div>
}

export default Profile