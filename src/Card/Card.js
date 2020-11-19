import React, {useState} from 'react'
import "./Card.css"
import img from "../Images/thepcOneImg.png"

function Card(props) {
    let eventData={}
    const userID=props.userID
    const buttonText=props.buttonText
    const date=props.startDate
    const newDate = date.toString().substring(0,10);

    if(buttonText=='Start')
    eventData=props.event

    function eventStart(){
        props.eventStart(eventData)
    }

    function eventsRegister()
    {   if(userID)
       {     
        props.eventsRegister(
            {   
                'eventName':props.name,
                'eventID':props.id
            }
        )
        
        }
        else
        console.log('Not logged in')
    }

    return (

        <div class="card-container navAfter">
            <div class="float-layout">
                <div class="card-image">
                    <img class="customImage" src={img}/>
                        <div class="card d-flex ">
                            <div class="card-title">{props.name}</div>
                            <div class="card-desc mb-auto">{props.desc}</div>
                            <div class="d-flex justify-content-between align-items-center custom_footer">
                                <h5 className="card_footerColor">Date : <span className="card_footerColor">{newDate}</span></h5>
                                <h5 className="card_footerColor">Time : <span className="card_footerColor">2-6 PM</span></h5>
                                {(buttonText=='Register')?<button onClick={eventsRegister} class="registerButton registerButtonColor float-right btn my-2 my-sm-0 mr-auto" type="submit" > <span class="registerText">{buttonText}</span></button>:<></>}
                                {(buttonText=='Start')?<button onClick={eventStart} class="registerButton registerButtonColor float-right btn my-2 my-sm-0 mr-auto" type="submit" > <span class="registerText">{buttonText}</span></button>:<></>}
                                {buttonText=='Registered'?<button type="button" className="registerButton registerButtonColor float-right btn my-2 my-sm-0 mr-auto card_button_disabled">{props.buttonText}</button>:<></>}
                            </div>
                         </div>
                </div>
            </div>
        </div>

    )
}

export default Card