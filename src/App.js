import React, { useState } from 'react';
import {
    Switch,
    Route,
    NavLink,
    Redirect,
    useHistory,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import BlogpostPage from './pages/BlogpostPage';
import LoginPage from './pages/LoginPage';
import OverviewPage from './pages/OverviewPage';
import Button from "./components/Button";
import PrivateRoute from "./components/PrivateRoute";


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    const history = useHistory();

    function toLogout() {
        toggleIsAuthenticated(false);
        history.push("/");
    }

    return (
        <>
            <nav>
                <div className="app-header">
                    <h4>Mijn blog platform</h4>
                    <ul>

                        <li>
                            <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                        </li>

                        { isAuthenticated &&
                        <li>
                            <NavLink to="/blogposts" activeClassName="active-link">Blogposts</NavLink>
                        </li>
                        }

                        { isAuthenticated &&
                        <li>
                            <NavLink to="/" activeClassName="active-link">
                                <Button clickHandler={toLogout}>
                                    Uitloggen
                                </Button>
                            </NavLink>
                        </li>
                        }

                        { !isAuthenticated &&
                        <li>
                            <NavLink to="/login" activeClassName="active-link">Login</NavLink>
                        </li>
                        }
                    </ul>
                </div>
            </nav>
            <Switch>

                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route path="/login">
                    <LoginPage
                        inLog={ isAuthenticated }
                        toggleInlog={ toggleIsAuthenticated }
                    />
                </Route>

                {/* Oude versie van routing "OverviewPage" (opdracht 1) */}
                {/*<Route path="/blogposts">*/}
                {/*    {isAuthenticated ? <OverviewPage/> : <Redirect to="/"/>}*/}
                {/*</Route>*/}

                {/* Bonus opdracht met "PrivateRoute" */}
                <PrivateRoute exact path="/blogposts"
                              isAuth={ isAuthenticated }>
                    <OverviewPage/>
                </PrivateRoute>

                {/* Oude versie van routing "BlogpostPage" (opdracht 1) */}
                {/*<Route path="/blog/:blogId">*/}
                {/*    <BlogpostPage/>*/}
                {/*</Route>*/}

                {/* Bonus opdracht met "BlogpostPage" */}
                <PrivateRoute path="/blog/:blogId"
                              isAuth={ isAuthenticated }>
                    <BlogpostPage/>
                </PrivateRoute>

            </Switch>
        </>
    );
}

export default App;
