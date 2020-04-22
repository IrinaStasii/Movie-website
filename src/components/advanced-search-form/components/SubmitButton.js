import React from "react";

export function SubmitButton(props) {
  return (
    <div>
      <button className="submit" type="button" onClick={props.onClick}>
        Search
      </button>
    </div>
  );
}
