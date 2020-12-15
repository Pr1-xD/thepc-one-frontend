import React from 'react'
import './Textarea.css'

function Textarea(props) {
    let darkTheme=props.darkTheme
    function returnData(tag,val){
        props.returnData(tag,val)
    }
    return (
        <div className={darkTheme?"container custom-text textWhite":"container custom-text"}>
            <label for="exampleFormControlInput1"><b>{props.label}</b></label>
            <textarea type={props.type} class={darkTheme?"form-control textarea-custom-dark":"form-control textarea-custom"} id="exampleFormControlInput1" placeholder={props.placeholder}  onChange={e=>returnData(props.tag,e.target.value)} rows={props.rows} cols={props.cols} name={props.name}></textarea>
        </div>
    )
}

export default Textarea
