import React, { useContext } from 'react';
import { appContext } from "../App";

const Scenes = (props) => {
    // let { phrases } = props.location.state;
    const contextVars = useContext(appContext);
    console.log(contextVars);

  return (
    <div>Scenes</div>
  )
}

export default Scenes