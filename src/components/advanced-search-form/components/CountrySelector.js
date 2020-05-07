import React from "react";

export function CountrySelector(props) {

    let countries = ["USA", "UK", "Denmark", "Japan", "South Korea", "Canada", "Romania", "Philippines", "France"];
    return (

        <div className="clause">
            <div className="label">
                <h3>Country</h3>
            </div>
            <div className="inputs">
                <select name="countries" className="countries w-50" size="7" onChange={(event) =>
                    props.onClick(event.currentTarget.value)}>
                    {countries.map((country, index) => (
                        <option key={index} value={country} >
                            {country}
                        </option>
                    )
                    )}
                </select>
            </div>
        </div>
    )
}