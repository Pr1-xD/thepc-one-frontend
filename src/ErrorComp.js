import React,{useState} from 'react';

function ErrorComp(props) {
    const[errorMessage,setErrorMessage]=useState()
    const[deptsErrorMessage,setDeptErrorMessage]=useState()
    let obj=props.ccsData
    formValidator(obj)
    deptsValidator(obj)
    function formValidator(obj){
        if(obj.name&&obj.regNum&&obj.whatsapp&&obj.phNum&&obj.email&&obj.strengths&&obj.weaknesses&&obj.whyDoYouJoin){
        setErrorMessage()}
        else{
        setErrorMessage("Form Incomplete: Please fill out all fields")}
    }
    function deptsValidator(obj){
        if(obj.depts.length!=0){
        setDeptErrorMessage()}
        else{
        setDeptErrorMessage("Please select atleast one department")} 
    }
    return (
        <div>
            {errorMessage?<div className="container"><div class="alert alert-danger" role="alert">{errorMessage}</div></div>:<></>}
            {deptsErrorMessage?<div className="container"><div class="alert alert-danger" role="alert">{deptsErrorMessage}</div></div>:<></>}
        </div>
    );
}

export default ErrorComp;