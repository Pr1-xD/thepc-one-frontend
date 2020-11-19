import React,{useState} from 'react'

function CardButton(props) {
   const [btnText,setBtnText]=useState(props.buttonText)
   const userID=props.userID

   function eventsRegister(){
     if(userID)
     setBtnText('Registered')
     props.eventsRegister()
   }

   function eventStart(){
     props.eventStart()
   }

    return (
        <>
        {(btnText=='Register')?<button onClick={eventsRegister} class="registerButton registerButtonColor float-right btn my-2 my-sm-0 mr-auto" type="submit" > <span class="registerText">{btnText}</span></button>:<></>}
        {(btnText=='Start')?<button onClick={eventStart} class="registerButton registerButtonColor float-right btn my-2 my-sm-0 mr-auto" type="submit" > <span class="registerText">{btnText}</span></button>:<></>}
        {btnText=='Registered'?<button type="button" className="registerButton registerButtonColor float-right btn my-2 my-sm-0 mr-auto card_button_disabled">{btnText}</button>:<></>}
  </>)
};

export default CardButton
