import React from "react";
import "./TitleSelector.css"
import Cookies from "js-cookie";

export function TitleSelector(props) {
  return (
    <div>
      <div className="clause mt-4 mb-4">
        <div className="label ">
          <h3>Title</h3>
        </div>
        <div className="inputs">
          <input className="form-control form-control-lg" placeholder="e.g. The Godfather" type="text" size="5"
                 value={Cookies.get("movieTitle") || ""}
                 onChange={(event) => props.onChange(event.target.value)}/>
        </div>
      </div>
    </div>
  );
}