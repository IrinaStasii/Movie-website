import React from "react";

export function CountrySelector(props) {

    let country = "USA"
    return (

        <div className="clause">
            <div className="label">
                <h3>Country</h3>
            </div>
            <div className="inputs">
                <select multiple name="countries" className="countries" size="7">
                    <option value="USA" onClick={() => props.onClick(country)}>{country}</option>
                    <option value="UK">UK</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Japan">Japan</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Canada">Canada</option>
                    <option value="Romania">Romania</option>
                    <option value="Philippines">Philippines</option>
                    <option value="France">France</option>
                </select>
            </div>
        </div>
    )
}