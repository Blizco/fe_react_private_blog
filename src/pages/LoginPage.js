import React from 'react';
import { useHistory } from "react-router-dom";
import Button from "../components/Button";

function LoginPage({ inlog, toggleInlog }) {
    const history = useHistory();

function toLogin() {
    toggleInlog (inlog = true);
    history.push("/");
}

    return (
        <>
            <h1>Login pagina</h1>
            <h2>Druk op de knop om in te loggen</h2>
                <Button clickHandler={toLogin}>
                Inloggen
            </Button>


        </>
    );
}

export default LoginPage;