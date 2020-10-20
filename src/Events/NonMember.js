import React, { useEffect ,useState} from 'react'
// import axios from 'axios'
import EventsCard from './EventsCard'

function NonMember(props){
    const userID=props.userID
    const data=props.userData
    const eventsList=props.eventsData
    const mDate = props.mDate

    return(
        <>
            Live Events
            {eventsList ? <EventsCard mDate={mDate} eventsData={eventsList} data={data} userID={userID} buttonText="Start"/>:<br/>}
            Past Events
            {eventsList ? <EventsCard mDate={mDate} eventsData={eventsList} data={data} userID={userID}/>: <br/>}
        </>
    )
}
export default NonMember