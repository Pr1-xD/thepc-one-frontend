import React, { useState } from 'react'
import "./Checkboxes.css"

function Checkboxes(props) {
    const [checkboxStatus,setCheckboxStatus]=useState(false)
    let darkTheme=props.darkTheme
    function returnDepts(tag,val){
        props.returnDepts(tag,val)
    }
    return (
        <div className="container checkbox-inline">
            <div className="m-2 mt-2">
                <label class="checkbox bounce">
                <input name={props.name} type="checkbox" value={!checkboxStatus} onChange={e=>{returnDepts(props.tag,e.target.value);setCheckboxStatus(!checkboxStatus)}} />
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
