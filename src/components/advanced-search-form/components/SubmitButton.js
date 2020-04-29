import React from "react";

export function SubmitButton(props) {
  return (
    <div className="text-center ">
      <button className="submit btn btn-secondary" type="button" onClick={props.onClick}>
        Search
      </button>
    </div>
  );
}
