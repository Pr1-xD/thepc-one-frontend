import React from 'react'
import "./Input.css"

function Input(props) {
    let darkTheme=props.darkTheme
    function returnData(tag,val){
        props.returnData(tag,val)
    }
    return (
        <div className="container">
            <label for="exampleFormControlInput1">{props.label}</label>
            <input type={props.type} class={darkTheme?"form-control input-custom-dark":"form-control input-custom"} id="exampleFormControlInput1" placeholder={props.placeholder} onChange={e=>returnData(props.tag,e.target.value)} name={props.name}></input>
        </div>
    )
}

export default Input