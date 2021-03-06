import React, {useState} from 'react'
import "./Card.css"
import "./CardDark.css"
import img from "../Images/thepcOneImg.png"
import CardButton from './CardButton'
import swal from '@sweetalert/with-react'
import ScrollAnimation from 'react-animate-on-scroll';

function Card(props) {
    let eventData={}
    const darkTheme=props.darkTheme
    const userID=props.userID
    let buttonText=props.buttonText
    let buttonTextTwo=props.buttonTextTwo
    const date=props.startDate
    const newDate = date.toString().substring(0,10)
    
    let blob = new Blob([arrayBuffer])
    let srcBlob=null
    if(props.image){
        var arrayBuffer = new Uint8Array( props.image.data)
        blob=new Blob( [ arrayBuffer], { type: "image/jpeg" } );
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL( blob );
    }

    let textTime='2-6PM'
    if(props.textTime){
        textTime=props.textTime
    }
    function handleEventState(val){props.handleEventState(val)}
    function eventStart(){props.eventStart(eventData)}

    if(buttonText=='Start')
    eventData=props.event
    
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
        {
        swal("Please Login/SignUp", " ", "warning",{
            button:false,
            timer:2000,
        });
        console.log('Not logged in')
    }
    }

    return (
        <>
        <ScrollAnimation animateIn="animate__slideInLeft" delay='200' duration='0.6' animateOnce='true' >
        <div class={darkTheme?"card-container-dark":"card-container"}>{/* ADD CONDITIONAL RENDERING */}
            <div class="float-layout">
                <div class="card-image">
                    {props.image?<img class="customImage" src={imageUrl}/>:<img class="customImage" src={img}/>}
                        <div class={darkTheme?"card card-custom-dark d-flex":"card card-custom d-flex"}>{/* ADD CONDITIONAL RENDERING */}
                            <div class="card-title">{props.name}</div>
                            <div class="card-desc mb-auto">{props.desc}</div>
                            <div class="d-flex justify-content-between align-items-center custom_footer">
                                <h5 className="card_footerColor">Date : <span className="card_footerColor">{newDate}</span></h5>
                                <h5 className="card_footerColor">Time : <span className="card_footerColor">{textTime}</span></h5>
                                <div>
                                {(buttonText=='Register')?<CardButton eventsRegister={eventsRegister} buttonText={buttonText} userID={userID}  />:
                                (buttonText=='Start')?<CardButton eventStart={eventStart} buttonText={buttonText} userID={userID}/>:
                                (buttonText=='Registered')?<CardButton buttonText={buttonText} eventsRegister={eventsRegister} userID={userID} darkTheme={darkTheme}/>:
                                (buttonText=='Pending')?<CardButton buttonText={buttonText} userID={userID} darkTheme={darkTheme}/>:
                                <>
                                    <span className={darkTheme?"customTextDark":"customText"}>Registered</span>
                                    {/* ADD CONDITIONAL RENDERING */}
                                </>}
                            {buttonTextTwo=='View Submissions'?<CardButton handleEventState={handleEventState} buttonText={buttonTextTwo}/>:<></>}
                            </div>
                            </div>
                         </div>
                </div>
            </div>
        </div>
        </ScrollAnimation>
    </>
    )
}

export default Card