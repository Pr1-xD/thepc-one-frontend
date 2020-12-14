import React, { useState } from 'react'
import EventsCard from './EventsCard'
import StartEvent from './StartEvent'

function NonMember(props){
    const darkTheme=props.darkTheme
    const token=props.token
    const [startEventData,setEventData]=useState()
    const [eventsSetter,setEventPage]=useState('Cards')
    const userID=props.userID
    const data=props.userData
    const eventsList=props.eventsList
    const mDate = props.mDate

    function CardsToggle(){
        setEventData()
        setEventPage('Cards')
        window.scrollTo(0, 0)
    }

    function eventStart(val){
        console.log(val)
        setEventPage('Event')
        setEventData(val)
    }

    return(
        <>
            {eventsSetter=='Cards'? <EventsCard eventsList={eventsList} data={data} userID={userID} buttonText="Start" userType={-1} eventStart={eventStart} darkTheme={darkTheme} />:<StartEvent token={token} data={data} eventData={startEventData} CardsToggle={CardsToggle} darkTheme={darkTheme}/>}
        </>
    )
}
export default NonMember