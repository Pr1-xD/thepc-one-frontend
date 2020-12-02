import React,{useEffect,useState} from 'react'
import axios from 'axios'
import EventsCard from './EventsCard'
import CreateEvent from './CreateEvent'
import StartEvent from './StartEvent'

function Member(props){
    const [EventsState,setEventsState]=useState('cards')
    const [startEventData,setEventData]=useState()
    const [eventsSetter,setEventPage]=useState('Cards')
    const token=props.token
    const eventsList=props.eventsList
    const userID=props.userID

    function CardsToggle(){
        setEventData()
        setEventPage('Cards')
    }

    function eventStart(val){
        console.log(val)
        setEventPage('Event')
        setEventData(val)
    }

    function eventsRefresh(){props.eventsRefresh()}
    function handleEventState(val){setEventsState(val)}
    
    return(
        <>
        {/* <button className="btn btn-lg btn-primary btn-block create-event" type="button" onClick={()=>handleEventState('Create')}>Create Event</button> */}
         {((EventsState=='cards')&&(eventsSetter=='Cards')) ? <EventsCard  eventsList={eventsList} userType={0} buttonText='Details' handleEventState={handleEventState} eventStart={eventStart} userID={userID}/>:((EventsState=='Create'))?<CreateEvent token={token} handleEventState={handleEventState} eventsRefresh={eventsRefresh}/>:(eventsSetter=='Event')?<StartEvent eventData={startEventData} CardsToggle={CardsToggle}/>:<></>}
        </>
    )
}
export default Member