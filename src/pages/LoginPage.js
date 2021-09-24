import React from 'react';
import {Link, useHistory} from "react-router-dom";

function LoginPage() {
    const history = useHistory();

    function handleClick() {
        history.push("/blogposts");
    }

    return (
        <>
            <h1>Login pagina</h1>
            <h2>Druk op de knop om in te loggen</h2>
            <button type="button"
                    onClick={handleClick}>
                Inloggen
            </button>


        </>
    );
};

export default LoginPage;