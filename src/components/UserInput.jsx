import { useState } from "react";

export default function UserInput() {

    const [userInput, setUserInput ] = useState(UserInput())

    function handleUserInput() {
        setUserInput()

    };

    return (

        <p>{userInput}</p>

    );
}