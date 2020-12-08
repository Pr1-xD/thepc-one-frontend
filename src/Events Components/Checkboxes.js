import React from 'react'
import "./Checkboxes.css"

function Checkboxes(props) {
    return (
        <div className="container checkbox-inline">
            <div className="m-2 mt-4">
                <label class="checkbox bounce">
                <input name={props.name} type="checkbox" />
                <svg viewBox="0 0 21 21">
                    <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                </svg>
            </label>
            </div>
            <div className="m-2 mt-4">{props.label}</div>
        </div>
    )
}

export default Checkboxes
