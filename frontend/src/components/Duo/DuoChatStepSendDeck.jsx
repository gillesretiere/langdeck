import React, { useContext, useState, useRef, useEffect, } from 'react';
import classes from "./DuoChatDeck.module.css";
import DeckContext from "../../context/DeckContext";
import DuoChatStepOptionDeck from './DuoChatStepOptionDeck';
import DuoChatStepOptionDeck2 from './DuoChatStepOptionDeck2';
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DuoChat__chat from "./DuoChat__chat";

const DuoChatStepSendDeck = ({step}) => {
    let ctx = useContext(DeckContext);
    let conversation = ctx.current_deck.chat_deck;
    /*let step = ctx.current_deck.chat_step_deck; */

    const userName = "Admin";
    const [ws, setWs] = useState([]);
    const [messages, setMessages] = useState([]);
    const [sentMessage, setSentMessage] = useState('');
    const [receivedMessage, setReceivedMessage] = useState('');
    const [selectedOption, setSelectedOption] = useState([]);
    const [clients, setClients] = useState([]);
    const inputRef = useRef(null);

    const sendMessageHandler = (event) => {
        let data = {
             "message": "some message",
             "language": "some language",
             "question": "question",
             "question_tr" : "question traduite",
             "reponses" : "vk réponses",
             "reponses_tr" : "vk réponses traduites",
             "audio" : "audio",
             "options:" : [],
         };  
         data.message = inputRef.current.value;
         data.language = ctx.current_deck.language_deck.language;
         data.question = ctx.current_deck.chat_step_deck.step;
         data.question_tr = ctx.current_deck.chat_step_deck.step_translation;
         data.audio = ctx.current_deck.chat_step_deck.step_audio_url;
         data.options = ctx.current_deck.chat_step_deck.options && ctx.current_deck.chat_step_deck.options.map(
            (el) => {
                return (el)
            }
            )
         //ws.send(inputRef.current.value);
         console.log (data);
         ws.send(JSON.stringify(data));
         setSentMessage (data.question_tr);
         inputRef.current.value = "";
    }

    const linkHandler = (event) => {
        ctx.current_deck.chat_step_deck=step;
    };

    useEffect ( () => {
        let socket = new WebSocket(`ws://51.91.8.112:8000/ws/a/${userName}`);
        setWs (socket);
        socket.onmessage = function (event) {
            let userData = JSON.parse(event.data);
            setMessages ((prevMessages) => [...prevMessages, userData.message]);
            setReceivedMessage (userData.option);
            setSelectedOption (userData.option);
            let client_ids = [...userData.client_ids];
            setClients(client_ids);
        };
    }, []);


    return (
        <>
        <div className={classes. chat_container}>
                <div className={classes.chat_sender_container}>
                    <div className={`${classes.card__selected__step__container}`} onClick={linkHandler}>
                            <div className={`${classes.card__wrapper}`}>
                                <div className={`${classes.card__header}`}>
                                    {step ? (
                                        <>
                                        <div className={`${classes.card__subtitle}`}>{step.num_step}</div>
                                        <div className={`${classes.card__title}`}>{step.step}
                                        <span className={classes.card__title__tr}>{step.step_translation}</span>
                                        </div>
                                        </>
                                    ):(
                                        <>
                                        <div className={`${classes.card__subtitle}`}>&nbsp;</div>
                                        <div className={`${classes.card__title}`}>en attente de sélection</div>
                                        </>
                                    ) }
                                </div>
                                {step.options && step.options.map(
                                    (el) => {
                                        return (<DuoChatStepOptionDeck2 key={el.option_rec_id} option={el} translate='false' />)
                                    }
                                    )
                                }
                        
                            </div>          
                        <div className={classes.button__wrapper}>
                            <Box className={classes.mui_button} >
                                <input ref={inputRef} type="text" className='p-3 m-2 w-full bg-gray-500 text-white' placeholder="Votre message"/>
                                <Button color="blue_primary" m={2} variant="contained" size="small" onClick={sendMessageHandler}>
                                    Envoyer
                                </Button> 
                            </Box>  
                        </div>
                    </div>
                </div>         

                <div className={classes.chat_receiver_container}>
                    <div className={`${classes.card__receiver__container}`}>
                        <div className={`${classes.card__wrapper}`}>
                            <div className={`${classes.card__header}`}>
                                <div className={`${classes.card__title}`}><span className='text-xl'></span>Conversation</div>
                            </div>
                            <div>
                            {sentMessage ?(
                            <>  
                                <div className='p-2 mx-8 font-semibold text-white text-left'><span className='text-xl'>&rarr;</span>
                                {step.step}<span className='text-xl text-gray-600'>&nbsp;|&nbsp;</span>
                                <span className='font-semibold text-yellow-300'>{step.step_translation}</span>
                                </div>
                            </>):(<></>)
                            }
                            </div>
                            <div>
                                {receivedMessage ? (
                                    <>
                                    <div className='p-2 mx-8 font-semibold text-xl text-white text-right'>
                                        {selectedOption}
                                        <span className='text-xl'>&larr;</span>
                                    </div>
                                    </>
                                ):(
                                    <></>
                                )}                
                            </div>
                        </div>          
                    </div>   
                </div>   
            </div>  
  
                <div className='ml-5'>Détail de la conversation</div>
                {receivedMessage && receivedMessage}
                <div className='ml-5'>
                    <ul className='p-2 text-gray-500 text-left mt-4 bg-gray-200'>
                        {messages.map ((message, index) => {
                            return <li key={index}>{message}</li>;
                        }
                        )}
                    </ul>                                 
                </div>                     
                </>
    )
}

export default DuoChatStepSendDeck