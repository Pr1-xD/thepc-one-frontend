import React from 'react'
import "./Input.css"

function Input(props) {
    return (
        <div className="container">
            <label for="exampleFormControlInput1">{props.label}</label>
            <input type={props.type} class="form-control" id="exampleFormControlInput1" placeholder={props.placeholder} value={props.value}></input>
        </div>
    )
}

export default Input