import React,{useEffect,useState} from 'react'
import axios from 'axios'
import EventsCard from './EventsCard'
import CreateEvent from './CreateEvent'

function Member(props){
    const [EventsState,setEventsState]=useState('cards')
    const token=props.token
    const mDate = props.mDate
    const eventsData=props.eventsData

    function handleEventState(val){setEventsState(val)}
    
    return(
        <>
        <button className="btn btn-lg btn-primary btn-block create-event" type="button" onClick={()=>handleEventState('Create')}>Create Event</button>
         {((EventsState=='cards')) ? <EventsCard  mDate={mDate} eventsData={eventsData} userType={0} buttonText='Details'/>:<CreateEvent token={token} handleEventState={handleEventState}/>}
        </>
    )
}
export default Member