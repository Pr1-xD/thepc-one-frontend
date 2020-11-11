import React, { useState } from 'react'

function StartEvent(props){
    const eventData=props.eventData
    console.log(eventData)
    return(
        <>
            <h1 className="events-header">{eventData}</h1>
        </>
    )
}
export default StartEvent