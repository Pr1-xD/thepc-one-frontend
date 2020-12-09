import React from 'react'

function Textarea(props) {
    return (
        <div className="container">
            <label for="exampleFormControlInput1">{props.label}</label>
            <textarea type={props.type} class="form-control" id="exampleFormControlInput1" placeholder={props.placeholder} value={props.value} rows={props.rows} cols={props.cols} name={props.name}></textarea>
        </div>
    )
}

export default Textarea
