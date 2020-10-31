import React from 'react'
import EventsCard from './EventsCard'

function NonMember(props){
    const userID=props.userID
    const data=props.userData
    const eventsList=props.eventsData
    const mDate = props.mDate

    return(
        <>
            Live Events
            {eventsList ? <EventsCard mDate={mDate} eventsData={eventsList} data={data} userID={userID} buttonText="Start" userType={-1} />:<></>}
            Past Events
            {eventsList ? <EventsCard mDate={mDate} eventsData={eventsList} data={data} userID={userID} userType={-1}/> : <></>}
        </>
    )
}
export default NonMember