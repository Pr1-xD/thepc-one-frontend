import React,{useEffect,useState} from 'react'
import axios from 'axios'
import EventsCard from './EventsCard'
import CreateEvent from './CreateEvent'
import StartEvent from './StartEvent'
import ViewSubmissions from './ViewSubmissions'

function Member(props){
    const darkTheme=props.darkTheme
    const formFilled=props.formFilled
    const [EventsState,setEventsState]=useState('cards')
    const [startEventData,setEventData]=useState()
    const [eventsSetter,setEventPage]=useState('Cards')
    const token=props.token
    const eventsList=props.eventsList
    const userID=props.userID
    function ccsUserData(){props.ccsUserData()}

    function CardsToggle(){
        setEventData()
        setEventPage('Cards')
        setEventsState('cards')
        window.scrollTo(0, 0)
    }

    function eventStart(val){
        setEventPage('Event')
        window.scrollTo(0,0)
        setEventData(val)
    }
    function eventsRefresh(){props.eventsRefresh()}
    function handleEventState(val){setEventsState(val)}
    function formSubmitted(){props.formSubmitted()}
    
    return(
        <>
        {/* <button className="btn btn-lg btn-primary btn-block create-event" type="button" onClick={()=>handleEventState('Create')}>Create Event</button> */}
         {((EventsState=='cards')&&(eventsSetter=='Cards')) ? <EventsCard  eventsList={eventsList} userType={0} buttonText='Details' handleEventState={handleEventState} eventStart={eventStart} userID={userID} darkTheme={darkTheme} token={token} formFilled={formFilled}/>:((EventsState=='Create'))?<CreateEvent token={token} handleEventState={handleEventState} eventsRefresh={eventsRefresh} darkTheme={darkTheme}/>:(eventsSetter=='Event')?<StartEvent eventData={startEventData} CardsToggle={CardsToggle} darkTheme={darkTheme} token={token} formFilled={formFilled} formSubmitted={formSubmitted} ccsUserData={ccsUserData} />:(EventsState=='Submissions')?<ViewSubmissions handleEventState={handleEventState} token={token} CardsToggle={CardsToggle}  darkTheme={darkTheme}/>:<></>}
        </>
    )
}
export default Member