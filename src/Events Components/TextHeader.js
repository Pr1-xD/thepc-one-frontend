import React from 'react'
import "./TextHeader.css";

function TextHeader(props) {
    return (
        <div className="textHeader">
            <h2>{props.text}</h2>
        </div>
    )
}

export default TextHeader
