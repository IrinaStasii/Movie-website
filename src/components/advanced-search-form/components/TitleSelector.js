import React from "react";
import "./TitleSelector.css"

export function TitleSelector (props){
  return (
    <div>
      <div className="clause">
        <div className="label">
            <h3>Title</h3>
        </div>
        <div className="inputs">
           <input  placeholder="e.g. The Godfather" type="text" size="75" onChange={(event) => props.onChange(event.target.value)}/>
        </div>
      </div>
    </div>
  );
}