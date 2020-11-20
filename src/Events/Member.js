import React,{useEffect,useState} from 'react'
import axios from 'axios'
import EventsCard from './EventsCard'
import CreateEvent from './CreateEvent'

function Member(props){
    const [EventsState,setEventsState]=useState('cards')
    const token=props.token
    const mDate = props.mDate
    const eventsList=props.eventsList
    const userID=props.userID

    function handleEventState(val){setEventsState(val)}
    
    return(
        <>
        {/* <button className="btn btn-lg btn-primary btn-block create-event" type="button" onClick={()=>handleEventState('Create')}>Create Event</button> */}
         {((EventsState=='cards')) ? <EventsCard  mDate={mDate} eventsList={eventsList} userType={0} buttonText='Details' handleEventState={handleEventState} userID={userID}/>:<CreateEvent token={token} handleEventState={handleEventState}/>}
        </>
    )
}
export default Member