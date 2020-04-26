import React from "react";
import { generateMinutes } from "../AdvancedSearchUtils";

export function RuntimeSelector(props) {
  return (
    <div className="clause">
      <div className="label">
        <h3>Runtime</h3>
      </div>
      <div className="inputs">
        <select
          name="runtime-min"
          id="runtime-min"
          className="minutes mr-2"
          onChange={(event) =>
            props.onChange(event.currentTarget.value, "minutesMin")
          }
        >
          {generateMinutes().map((minutesMin, index) => (
            <option
              key={index}
              value={minutesMin}
              onClick={() => props.onClick(minutesMin)}
            >
              {minutesMin}
            </option>
          ))}
        </select>
        to
        <select
          id="runtime-max"
          name="runtime-max"
          className= "ml-2"
          onChange={(event) =>
            props.onChange(event.currentTarget.value, "minutesMax")
          }
        >
          {generateMinutes().map((minutesMax, index) => (
            <option key={index} value={minutesMax}>
              {minutesMax}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
