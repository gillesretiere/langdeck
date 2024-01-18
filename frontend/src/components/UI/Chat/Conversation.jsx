import React, { useState, } from "react";
import Login from "./Login";
import Chat from "./Chat";

const Conversation = ({deck}) => {
    const [loggedIn, setLogin] = useState(false);
    const [userName, setUserName] = useState("");

    const login = () => {
        setLogin (true);
    }

    const setUser = (event) => {
        setUserName (event.target.value);
    }

    return (
        <div className="bg-gray-100 h-screen">
            <div className='flex justify-center'>
                {! loggedIn ? (
                    <Login onLogin={login} onSetUserName={setUser}></Login>
                ) : (
                    <Chat userName={userName}></Chat>
                )}
            </div>

        </div>
    )
}

export default Conversation