import React, { useState, } from "react";
import Login from "./Login";
import Chat from "./Chat";
import ChatCardBox from "./ChatCardBox";
import classes from "./Layout.module.css";

const Conversation = () => {
    const [loggedIn, setLogin] = useState(false);
    const [userName, setUserName] = useState("");

    const login = () => {
        setLogin (true);
    }

    const setUser = (event) => {
        setUserName (event.target.value);
    }

    return (
    <div className={`${classes.subContainer}`}>
            <div className='flex justify-center'>
                {! loggedIn ? (
                    <Login onLogin={login} onSetUserName={setUser}></Login>
                ) : (
                    <ChatCardBox userName={userName}></ChatCardBox>
                )}
            </div>
    </div>

    )
}

export default Conversation