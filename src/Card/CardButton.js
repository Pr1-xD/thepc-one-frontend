import React,{useState} from 'react'

function CardButton(props) {
  const darkTheme=props.darkTheme
  let buttonText=props.buttonText
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
        {(buttonText=='Register')?<button onClick={eventsRegister} class="registerButton registerButtonColor float-right btn my-2 my-sm-0 mr-auto" type="submit" > <span class="registerText">{buttonText}</span></button>:<></>}
        {(buttonText=='Start')?<button onClick={eventStart} class="registerButton registerButtonColor float-right btn my-2 my-sm-0 mr-auto" type="submit" > <span class="registerText">{buttonText}</span></button>:<></>}
        {buttonText=='Registered'?<button type="button" className={darkTheme?"registerButton registerButtonColorDark float-right btn my-2 my-sm-0 mr-auto card_button_disabled":"registerButton registerButtonColor float-right btn my-2 my-sm-0 mr-auto card_button_disabled"}>{buttonText}</button>:<></>}
        {buttonText=='Pending'?<button type="button" className={darkTheme?"registerButton registerButtonColorDark float-right btn my-2 my-sm-0 mr-auto card_button_disabled":"registerButton registerButtonColor float-right btn my-2 my-sm-0 mr-auto card_button_disabled"}>{buttonText}</button>:<></>}
  </>)
};

export default CardButton
