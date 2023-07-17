import React, { useState } from "react";

import Card from "./Card";
import Button from "./Button";
import InputText from "./InputText";
import LanguageList from "./LanguageList";

import classes from "./SelectLanguage.module.css";

const SelectLanguage = (props) => {
  console.log(props.languages);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [languagesFiltered, setLanguagesFiltered] = React.useState([]);


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
        <InputText onType={onSearchHandler}/>
        <LanguageList languages={languagesFiltered} />

        <footer className={classes.actions}>
          <Button>Validate</Button>
        </footer>
      </Card>
    </div>
  );
};

export default SelectLanguage;
