import React from "react";

export function CountrySelector(props) {

    let countries = ["USA", "UK", "Denmark", "Japan", "South Korea", "Canada", "Romania", "Philippines", "France"];
    return (

        <div className="clause">
            <div className="label">
                <h3>Country</h3>
            </div>
            <div className="inputs">
                <select multiple name="countries" className="countries" size="7" >
                    {countries.map((country, index) => (
                        <option key={index} value={country} onClick={() => props.onClick(country)}>{country}</option>
                    )
                    )}

                </select>
            </div>
        </div>
    )
}