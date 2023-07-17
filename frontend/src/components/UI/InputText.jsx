import React from 'react';
import classes from "./InputText.module.css";
import Card from "../UI/Card";

const InputText = (props) => {
    const inputChangeHandler = (event) => {
        props.onType(event.target.value);
        };
  return (
    
    <div>
    <Card className={classes.input}>
      <label htmlFor="search">Choose</label>
      <input type="text" id="search" onChange={inputChangeHandler} />
    </Card>
    </div>
  )
}

export default InputText