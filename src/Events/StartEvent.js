import React, { useState } from 'react'
import Ccs from "../Ccs"
import "./StartEvent.css"

function StartEvent(props){
    const token=props.token
    const darkTheme=props.darkTheme
    const numTextBoxes=props.eventData.numTextBoxes
    const eventData=props.eventData
    console.log(eventData)

    function CardsToggle(){
        props.CardsToggle()
    }

    function TextField(i){
        return(
            <input type="text" className="form-control" placeholder="Event" required /> 
        )
    }
    return(
        eventData?<div>
            <div className={darkTheme?"event-headers-dark m-auto text_header text-center":"event-headers m-auto text_header text-center"}>{eventData.eventName}</div>
            <Ccs CardsToggle={CardsToggle} token={token}/>
            {/* {Array.from(Array(props.numTextBoxes).keys()).map(TextField)} */}
            {/* {eventData.eventLink?<button className="registerButton registerButtonColor btn my-2 my-sm-0 mr-auto" type="submit" > <span class="registerText">Go to Event</span></button>:<></>}
            <button onClick={CardsToggle} className="registerButton registerButtonColor btn my-2 my-sm-0 mr-auto" type="submit" > <span class="registerText">Back</span></button> */}
            </div>
            :<></>    
    )
}
export default StartEvent

// approved: true
// dateCreated: "2020-09-30T13:47:36.717Z"
// eventDesc: "This is event one I think"
// eventEnd: "2020-10-05T19:43:01.654Z"
// eventLink: "https://google.com"
// eventName: "Event One"
// eventStart: "2020-10-05T19:43:01.654Z"
// isFileUpload: true
// isMultiChoice: false
// numFileUploads: 2
// numMultiChoice: 0
// numTextBoxes: 0
// onChange={e=>abc.eventName=e.target.value}