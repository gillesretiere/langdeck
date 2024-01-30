import React from 'react';
import classes from "./Layout.module.css";


const ChatOptionPicker = ({option,}) => {

  return (
    <div className={`${classes.option__wrapper}`}>
      <div className={`${classes.option}`}>
        {option}
      </div>
    </div>
  )
}

export default ChatOptionPicker