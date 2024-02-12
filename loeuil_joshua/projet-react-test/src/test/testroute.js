import React from "react";
import { BrowserRouter as Router,
Link,
Route,
Routes } from "react-router-dom";
import Home from "./testHome";
import Users from "./testUser";
import Contact from "./testContact";



function Routine(){
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/Home">
                       <h3> Home</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/Users">
                      <h3>  Users</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/Contact">
                        <h3>Contact</h3>
                    </Link>
                </li>
            </ul>

            <Routes>
                <Route path="./Home">
                    <Home/>
                </Route>
                <Route path="./Users">
                    <Users/>
                </Route>
                <Route path="./Contact">
                    <Contact/>
                </Route>
            </Routes>
        </Router>
    )
}

export default Routine;