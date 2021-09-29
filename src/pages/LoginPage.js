import React from 'react';
import {NavLink, useHistory} from "react-router-dom";
// Gebruikt bij eerdere opdracht
// import Button from "../components/Button"; Gebruikt bij eerdere opdracht

// Nu bij bonusopdracht nodig
import {useForm} from "react-hook-form";
import users from "../data/users.json"

function LoginPage({inlog, toggleInlog}) {
    const history = useHistory();
    const {register, handleSubmit, formState: {errors}} = useForm();

    let loginOK = false;
    let loginWarning = false;

    function toLogin() {
        toggleInlog(true);
        history.push("/");
    }

    // Nu bij bonusopdracht nodig
    function checkInlog(data) {
        for (let i = 0; i < users.length; i++) {
            if ((data.user === users[i].username) && (data.pw === users[i].password)) {
                loginOK = true;
                break;
            }
        }
        if (loginOK) {
            toLogin();
        }
        else { loginWarning = true;
        }
    }


    console.log("ERRORS", errors);
    return (
        <>
            <h1>Login pagina</h1>
            <h2>Vul je gebruikersnaam en wachtwoord in en druk op inloggen</h2>
            <form onSubmit={handleSubmit(checkInlog)}>
                <fieldset>

                    <label htmlFor="user-name">
                        Gebruikersnaam:
                        <input
                            type="text"
                            id="user-name"
                            {...register("user", {
                                required: "Gebruikersnaam moet worden ingevuld",
                                minLength: {
                                    value: 3,
                                    message: "Minimaal 3 karakters gebruiken!!"
                                },
                            })}
                        />
                    </label>
                    {errors.user && <p>{errors.user.message}</p>}

                    <label htmlFor="pw-name">
                        Wachtwoord:
                        <input
                            type="password"
                            id="pw-name"
                            {...register("pw", {
                                required: "Wachtwoord moet worden ingevuld",
                                minLength: {
                                    value: 6,
                                    message: "Minimaal 6 karakters gebruiken!!"
                                },
                            })}
                        />
                    </label>
                    {errors.pw && <p>{errors.pw.message}</p>}

                    {/* Oude button mbv component "Button" */}
                    {/*<Button clickHandler={toLogin}>*/}
                    {/*    Inloggen*/}
                    {/*</Button>*/}

                    {/* Nieuwe button voor bonusopdracht */}
                    <button type="submit">
                        Inloggen
                    </button>
                </fieldset>
            </form>

            { loginWarning &&
            <h1>Verkeerde inloggegevens!!</h1>
            }
        </>
    );
}

export default LoginPage;