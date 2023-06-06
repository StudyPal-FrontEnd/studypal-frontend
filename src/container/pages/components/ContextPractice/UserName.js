import React, { useState, useContext } from "react";
import { UsernameContext } from "../../Contexts/UserNameContext";

function UserName() {
    const {setUsername, setShowProfile} = useContext(UsernameContext);

    return (
        <div>
            <input
                type="text"
                placeholder="Username..."
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            />

            <button onClick={() => {setShowProfile(true)}}>LOGIN</button>
        </div>
    )
}

export default UserName;