import React from "react";
import { generateYears } from "../AdvancedSearchUtils";
import "../components/Years.css";
export function YearSelector(props) {
  return (
    <div className="clause">
      <div className="label">
        <h3>Year</h3>
      </div>
      <div className="inputs">
        <select name="years" className="years w-50 " size="7">
          {generateYears().map((year, index) => (
            <option key={index} onClick={() => props.onClick(year)}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
