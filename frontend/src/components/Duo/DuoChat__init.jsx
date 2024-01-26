import React, { useState, } from "react";
import classes from "./DuoChatDeck.module.css";
import DeckContext from "../../context/DeckContext";
import DuoChat__chat from "./DuoChat__chat";
import DuoChat__login from "./DuoChat__login";

const DuoChat__init = () => {
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
                    <DuoChat__login onLogin={login} onSetUserName={setUser}></DuoChat__login>
                ) : (
                    <DuoChat__chat userName={userName}></DuoChat__chat>
                )}
            </div>

        </div>
    )
}

export default DuoChat__init