import React from 'react'
import "./Checkboxes.css"

function Checkboxes(props) {
    let darkTheme=props.darkTheme
    function returnDepts(tag){
        props.returnDepts(tag)
    }
    return (
        <div className="container checkbox-inline">
            <div className="m-2 mt-2">
                <label class="checkbox bounce">
                <input name={props.name} type="checkbox" onChange={e=>returnDepts(props.tag)} />
                <svg viewBox="0 0 21 21">
                    <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                </svg>
            </label>
            </div>
            <div className={darkTheme?"textWhite m-2 mt-2":"m-2 mt-2"}>{props.label}</div>
        </div>
    )
}

export default Checkboxes
