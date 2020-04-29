import React from "react";

export function LanguageSelector(props) {
    let languages = ["USA", "English", "Mandarin", "French", "Spanish", "Japanese", "Portuguese", "Thai", "Esperanto", "Italian", "German", "Romanian", "Filipino", "Tagalog"]

    return (
        <div className="clause">
            <div className="label">
                <h3>Languages</h3>
            </div>
            <div className="inputs">
                <select multiple name="language" className="language w-50" size="7" onChange={(event) =>
                    props.onChange(event.currentTarget.value)
                }>
                    {languages.map((language, index) => (
                        <option key={index} value={language}>
                            {language}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}