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
          disabled={true}
          name="runtime-min"
          id="runtime-min"
          className="minutes"
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
          disabled={true}
          id="runtime-max"
          name="runtime-max"
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
