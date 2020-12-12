import React from 'react'

function Textarea(props) {
    function returnData(tag,val){
        props.returnData(tag,val)
    }
    return (
        <div className="container">
            <label for="exampleFormControlInput1">{props.label}</label>
            <textarea type={props.type} class="form-control" id="exampleFormControlInput1" placeholder={props.placeholder}  onChange={e=>returnData(props.tag,e.target.value)} rows={props.rows} cols={props.cols} name={props.name}></textarea>
        </div>
    )
}

export default Textarea
