import React, { useState } from 'react'

function StartEvent(props){
    const numTextBoxes=props.eventData.numTextBoxes
    const eventData=props.eventData
    console.log(eventData)
    function TextField(i){
        return(
           
            <input type="text" className="form-control" placeholder="Event" required />
            
           
        )
    }
    return(
        eventData?<div>
            <h1 className="events-header">{eventData.eventName}</h1>
            {Array.from(Array(10).keys()).map(TextField)}
            {eventData.eventLink?<button className="button btn btn-lg btn-primary mt-5 custom" type="button">Go to Event</button>:<></>}
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