import React, { useState } from 'react';
import {
    Switch,
    Route,
    NavLink,
    Redirect,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import BlogpostPage from './pages/BlogpostPage';
import LoginPage from './pages/LoginPage';
import OverviewPage from './pages/OverviewPage';
import posts from './data/posts.json';


function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(true);
    console.log(posts);

  return (
    <>
        <nav>
            <div className="app-header">
                <h4>Mijn blog platform</h4>

                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/login" activeClassName="active-link">Login</NavLink>
                    </li>

                    {/*<li>*/}
                    {/*    <NavLink to="/blogposts" activeClassName="active-link">Overzicht</NavLink>*/}
                    {/*</li>*/}

                    {/*<li>*/}
                    {/*    <NavLink to="/blog/:id" activeClassName="active-link">Blog posts</NavLink>*/}
                    {/*</li>*/}
                </ul>
            </div>
        </nav>
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route path="/login">
                <LoginPage/>
            </Route>
            <Route path="/blogposts">
                {isAuthenticated ? <OverviewPage/> : <Redirect to="/"/>}
            </Route>
            <Route path="/blog/:id">
                <BlogpostPage/>
            </Route>
        </Switch>
    </>
  );
}

export default App;
