import React from "react";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AutoComplete = (props) => {

    return (
        <Autocomplete
            disablePortal
            value={props.value}
            onChange={(event, newValue) => {
            props.setValue(newValue);
            }}
            inputValue={props.inputValue}
            onInputChange={(event, newInputValue) => {
            props.setInputValue(newInputValue.toLowerCase());
            }}
            id="combo-box-deck"
            options={props.options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="deck" />}
        />  
    
    )

}

 
export default AutoComplete;