import React from 'react'
import "./Checkboxes.css"

function Checkboxes(props) {
    return (
        <div class="container checkbox-inline">
            <div>
    <label class="checkbox bounce">
        <input type="checkbox" />
        <svg viewBox="0 0 21 21">
            <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
        </svg>
    </label>
    </div>
    <div>{props.label}</div>
</div>
    )
}

export default Checkboxes
