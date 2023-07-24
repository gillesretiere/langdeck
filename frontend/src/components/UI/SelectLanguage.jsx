import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Card from "./Card";
import Button from "./Button";
import InputText from "./InputText";
import LanguageList from "./LanguageList";

import classes from "./SelectLanguage.module.css";


// TODO 
/*
https://mui.com/material-ui/react-autocomplete/
*/


const SelectLanguage = (props) => {
  console.log(props.languages);
  const languages = props.languages.map(a => a.language_name_fr);
  //const languages = props.languages.map(a => { return { language_name_fr: a.language_name_fr, language_name_en: a.language_name_en } } );


  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [languagesFiltered, setLanguagesFiltered] = useState([]);

  const onSearchHandler = (enteredValue) => {
    setLanguagesFiltered(props.languages.filter(({ language_name_fr }) => language_name_fr.startsWith(enteredValue)));
  };

  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={languages}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Language" />}
        />
        {/*    
        <InputText onType={onSearchHandler}/>
        <LanguageList languages={languagesFiltered} />
  */}
        <footer className={classes.actions}>
          <Button>Validate</Button>
        </footer>
      </Card>
    </div>
  );
};

export default SelectLanguage;
