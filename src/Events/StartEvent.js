import React, { useState } from 'react'
import Ccs from "../Ccs"
import "./StartEvent.css"

function StartEvent(props){
    const token=props.token
    const data=props.data
    const darkTheme=props.darkTheme
    const numTextBoxes=props.eventData.numTextBoxes
    const eventData=props.eventData
    console.log(eventData)
    function ccsUserData(){props.ccsUserData()}

    function CardsToggle(){
        props.CardsToggle()
    }
    function formSubmitted(){props.formSubmitted()}

    function TextField(i){
        return(
            <input type="text" className="form-control" placeholder="Event" required /> 
        )
    }
    return(
        eventData?<div className="start-event">
            
            <div className={darkTheme?"event-headers-dark m-auto text_header text-center":"event-headers m-auto text_header text-center"}>{eventData.eventName}</div>
            <Ccs CardsToggle={CardsToggle} token={token} darkTheme={darkTheme} data={data} formSubmitted={formSubmitted} ccsUserData={ccsUserData} />
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