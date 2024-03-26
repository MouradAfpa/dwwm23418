import React, { useState } from "react";
import Login from "./bouton1";
import Disconnect from "./bouton2";

const Bouton = () => {
  const [isLogged, setIsLogged] = useState(false);

  const onLogin = () => {
    setIsLogged(true);
  };

  const onLogOut = () => {
    setIsLogged(false);
  };

  return (
    <div>
      {isLogged ? 
        <Disconnect isUnlogged={onLogOut} />
        : 
        <Login isLogged={onLogin} />
    }
    </div>
  );
};

export default Bouton;
