import React from "react";

export function LanguageSelector(props) {
    let languages = ["USA", "English", "Mandarin", "French", "Spanish", "Japanese", "Portuguese", "Thai", "Esperanto", "Italian", "German", "Romanian", "Filipino", "Tagalog"]
    return (
        <div className="clause">
            <div className="label">
                <h3>Languages</h3>
            </div>
            <div className="inputs">
                <select multiple name="countries" className="countries" size="7">
                    {languages.map((language, index) => (
                        <option key={index} value={language} onClick={() => props.onClick(language)}>{language}</option>
                    ))}


                </select>
            </div>
        </div>
    )
}