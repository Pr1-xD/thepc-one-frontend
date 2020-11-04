import React from 'react'
import EventsCard from './EventsCard'

function NonMember(props){
    const userID=props.userID
    const data=props.userData
    const eventsList=props.eventsData
    const mDate = props.mDate

    return(
        <>
            <h1 className="event-headers">Live Events</h1>
            {eventsList ? <EventsCard mDate={mDate} eventsData={eventsList} data={data} userID={userID} buttonText="Start" userType={-1} />:<></>}
            <h1 className="event-headers">Past Events</h1>
            {eventsList ? <EventsCard mDate={mDate} eventsData={eventsList} data={data} userID={userID} userType={-1}/> : <></>}
        </>
    )
}
export default NonMember