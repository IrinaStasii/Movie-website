import React from "react";

export function LanguageSelector(props) {
    return (
        <div className="clause">
            <div className="label">
                <h3>Languages</h3>
            </div>
            <div className="inputs">
                <select multiple name="countries" className="countries" size="7">
                    <option>USA</option>
                    <option>English</option>
                    <option>Mandarin</option>
                    <option>French</option>
                    <option>Spanish</option>
                    <option>Japanese</option>
                    <option>Portuguese</option>
                    <option>Thai</option>
                    <option>Esperanto</option>
                    <option>Italian</option>
                    <option>German</option>
                    <option>Romanian</option>
                    <option>Filipino</option>
                    <option>Tagalog</option>
                </select>
            </div>
        </div>
    )
}