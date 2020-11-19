import React, {useState} from 'react'
import "./Card.css"
import img from "../Images/thepcOneImg.png"
import CardButton from './CardButton'

function Card(props) {
    let eventData={}
    const userID=props.userID
    let buttonText=props.buttonText
    const [btnText,setBtnText]=useState(props.buttonText)
    const date=props.startDate
    const newDate = date.toString().substring(0,10);

    // if(buttonText=='Registered')
    // setBtnText('Registered')

    if(buttonText=='Start')
    eventData=props.event

    function eventStart(){
        props.eventStart(eventData)
    }
    function test(){
        buttonText='Register'
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
                                {(buttonText=='Register')?<CardButton eventsRegister={eventsRegister} buttonText={buttonText} />:<></>}
                                {(buttonText=='Start')?<CardButton eventStart={eventStart} buttonText={buttonText}/> :<></>}
                                {buttonText=='Registered'?<CardButton test={test} buttonText={buttonText} />:<></>}

                            </div>
                         </div>
                </div>
            </div>
        </div>

    )
}

export default Card