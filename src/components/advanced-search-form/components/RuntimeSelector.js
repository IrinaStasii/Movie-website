import React from "react";
import { generateMinutes } from "../AdvancedSearchUtils";

export function RuntimeSelector(props) {
    return (
        <div className="clause">
            <div className="label">
                <h3>Runtime</h3>
            </div>
            <div className="inputs">
                <select name="runtime-min" id="runtime-min" className="minutes" size="5">
                    {generateMinutes().map((minutesMin, index) => (

                        <option key={index} value="min" onClick={() => props.onClick(minutesMin)}>
                            {minutesMin}
                        </option>
                    ))}
                </select>
              to
              <select id="runtime-max" name="runtime-max" size="5" >
                    {generateMinutes().map((minutesMax, index) => (

                        <option key={index} value="min" onClick={() => props.onClick(minutesMax)}>
                            {minutesMax}
                        </option>
                    ))}
                </select>
            </div>
        </div>


    )
}