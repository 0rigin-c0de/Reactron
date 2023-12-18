import UserContext from "./UserContext";
import { useState } from "react";

const UserState = (props) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user"))|| null); 
    // console.log(JSON.parse(localStorage.getItem("user"))|| null);
    // loading bar
    const [progress, setProgress] = useState(0);
    // dark-light mode
    const [mode, setMode] = useState("light");

    return (
        <UserContext.Provider value={{ user, setUser,progress ,setProgress, mode ,setMode}}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserState;