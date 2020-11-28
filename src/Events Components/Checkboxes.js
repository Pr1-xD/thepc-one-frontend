import React from 'react'
import "./Checkboxes.css"

function Checkboxes() {
    return (
        <div class="container">
    <label class="checkbox bounce">
        <input type="checkbox" />
        <svg viewBox="0 0 21 21">
            <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
        </svg>
    </label>
</div>
    )
}

export default Checkboxes
