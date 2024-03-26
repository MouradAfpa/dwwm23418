import React from "react";

const Disconnect = ({isUnlogged}) => {
    return (<button onClick={isUnlogged}>Disconnect</button>)
};

export default Disconnect;