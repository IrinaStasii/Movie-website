import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Action from "../pages/Action";
import Comedy from "../pages/Comedy";
import Scifi from "../pages/Scifi";
import Horror from "../pages/Horror";
import Romance from "../pages/Romance";
import Thriller from "../pages/Thriller";
import Drama from "../pages/Drama";
import Mystery from "../pages/Mystery";
import Crime from "../pages/Crime";
import Adventure from "../pages/Adventure";
import Fantasy from "../pages/Fantasy";
import Family from "../pages/Family";
import AdvancedSearch from "../pages/AdvancedSearch";
import "./Body.css";
import MovieList from "./advanced-search-form/MovieList";
import Login from "../pages/Login";

export function Body() {
  return (
    <div className="app-body">
      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/ACTION" component={Action} />
      <Route exact path="/COMEDY" component={Comedy} />
      <Route exact path="/SCI-FI" component={Scifi} />
      <Route exact path="/HORROR" component={Horror} />
      <Route exact path="/ROMANCE" component={Romance} />
      <Route exact path="/THRILLER" component={Thriller} />
      <Route exact path="/DRAMA" component={Drama} />
      <Route exact path="/MYSTERY" component={Mystery} />
      <Route exact path="/CRIME" component={Crime} />
      <Route exact path="/ANIMATION" component={Animation} />
      <Route exact path="/ADVENTURE" component={Adventure} />
      <Route exact path="/FANTASY" component={Fantasy} />
      <Route exact path="/FAMILY" component={Family} />
      <Route exact path="/Advanced Search" component={AdvancedSearch} />
      <Route exact path="/MovieList" component={MovieList} />
      <Route exact path="/Register-Login" component={Login} />
    </div>
  );
}
