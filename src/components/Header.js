import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';//permite navigarea pe pagini
import '../App.css';
import Navbar from './Navbar.js';
import Home from "../pages/Home.js";
import Action from '../pages/Action.js';
import Comedy from "../pages/Comedy.js";
import Scifi from "../pages/Scifi.js";
import Horror from "../pages/Horror.js";
import Romance from "../pages/Romance.js";
import Thriller from "../pages/Thriller.js";
import Drama from "../pages/Drama.js";
import Mystery from "../pages/Mystery.js";
import Crime from "../pages/Crime.js";
import Animation from "../pages/Animation.js";
import Adventure from "../pages/Adventure.js";
import Fantasy from "../pages/Fantasy.js";
import Family from "../pages/Family.js";
import AdvancedSearch from "../pages/AdvancedSearch.js";
import MovieDetails from "./MovieDetails";

export default function Header() {
  return (
    <Router>
      <div className="Header">
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Home" component={Home}/>
        <Route exact path ="/MovieDetails" component ={MovieDetails}/>
        <Route exact path="/ACTION" component={Action}/>
        <Route exact path="/COMEDY" component={Comedy}/>
        <Route exact path="/SCI-FI" component={Scifi}/>
        <Route exact path="/HORROR" component={Horror}/>
        <Route exact path="/ROMANCE" component={Romance}/>
        <Route exact path="/THRILLER" component={Thriller}/>
        <Route exact path="/DRAMA" component={Drama}/>
        <Route exact path="/MYSTERY" component={Mystery}/>
        <Route exact path="/CRIME" component={Crime}/>
        <Route exact path="/ANIMATION" component={Animation}/>
        <Route exact path="/ADVENTURE" component={Adventure}/>
        <Route exact path="/FANTASY" component={Fantasy}/>
        <Route exact path="/FAMILY" component={Family}/>
        <Route exact path="/Advanced Search" component={AdvancedSearch}/>
      </div>
    </Router>

  );
}

