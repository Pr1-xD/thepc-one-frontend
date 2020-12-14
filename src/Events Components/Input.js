import React from 'react'
import "./Input.css"

function Input(props) {
    let darkTheme=props.darkTheme
    function returnData(tag,val){
        props.returnData(tag,val)
    }
    return (
        <div className={darkTheme?"container custom-text textWhite":"container custom-text"}>
            <label for="exampleFormControlInput1"><b>{props.label}</b></label>
            <input type={props.type} class={darkTheme?"form-control input-custom-dark":"form-control input-custom"} id="exampleFormControlInput1" placeholder={props.placeholder} onChange={e=>returnData(props.tag,e.target.value)} name={props.name}></input>
        </div>
        // <div className="container">
        // <div class="omrs-input-group">
		// 		<label class="omrs-input-underlined">
		// 		  <input required/>
		// 		  <span class="omrs-input-label">{props.placeholder}</span>
		// 			<span class="omrs-input-helper">Helper Text</span>
		// 		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z"/></svg>
		// 		</label>
		// 	</div></div>
    )
}

export default Input