import React, { useState } from 'react'
import EventsCard from './EventsCard'
import StartEvent from './StartEvent'

function NonMember(props){
    const [startEventData,setEventData]=useState()
    const [eventsSetter,setEventPage]=useState('Cards')
    const userID=props.userID
    const data=props.userData
    const eventsList=props.eventsData
    const mDate = props.mDate

    function CardsToggle(){
        setEventData()
        setEventPage('Cards')
    }

    function eventStart(val){
        console.log(val)
        setEventPage('Event')
        setEventData(val)
    }

    return(
        <>
            {eventsSetter=='Cards'? <EventsCard mDate={mDate} eventsData={eventsList} data={data} userID={userID} buttonText="Start" userType={-1} eventStart={eventStart} />:<StartEvent eventData={startEventData} CardsToggle={CardsToggle}/>}
        </>
    )
}
export default NonMember