import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./LanguageList.module.css";

const LanguageList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.languages.map((language) => (
          <li>{language.language_name_fr}</li>
        ))}
      </ul>
    </Card>
  );
};

export default LanguageList;
