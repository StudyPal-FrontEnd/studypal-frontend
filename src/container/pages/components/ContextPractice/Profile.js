import React,{ useContext } from "react";
import { UsernameContext } from "../../Contexts/UserNameContext";


function Profile() {
    const { username} = useContext(UsernameContext);
    return (
        <div> 
            <h1>Profile</h1>
            <h2>UserName: { username } </h2>
        </div>

    )
}

export default Profile