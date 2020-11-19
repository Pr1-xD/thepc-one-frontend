import React,{useState} from 'react'

function CardButton(props) {
    let buttonText=props.buttonText
    const [btnText,setBtnText]=useState(props.buttonText)
   function eventsRegister(){
     props.eventsRegister()
   }
   function eventStart(){
     props.eventStart()
   }
   function test(){
     console.log('Clicked')
     setBtnText('Register')
   }
    

    return (
        <>
        {(btnText=='Register')?<button onClick={eventsRegister} class="registerButton registerButtonColor float-right btn my-2 my-sm-0 mr-auto" type="submit" > <span class="registerText">{btnText}</span></button>:<></>}
        {(btnText=='Start')?<button onClick={eventStart} class="registerButton registerButtonColor float-right btn my-2 my-sm-0 mr-auto" type="submit" > <span class="registerText">{btnText}</span></button>:<></>}
        {btnText=='Registered'?<button type="button" onClick={test} className="registerButton registerButtonColor float-right btn my-2 my-sm-0 mr-auto card_button_disabled">{btnText}</button>:<></>}
  </>)
};

export default CardButton
