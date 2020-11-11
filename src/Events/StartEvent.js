import React, { useState } from 'react'

function StartEvent(props){
    const eventData=props.eventData
    console.log(eventData)
    return(
        <>
            <h1 className="events-header">{eventData.eventName}</h1>
        </>
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