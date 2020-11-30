import React,{useEffect,useState} from 'react'
import axios from 'axios'
import EventsCard from './EventsCard'
import AdminCard from '../Card/AdminCard'
import StartEvent from './StartEvent'

function Admin(props){
    const eventsList=props.eventsList
    const token=props.token
    const [startEventData,setEventData]=useState()
    const [eventsSetter,setEventPage]=useState('Cards')

    function CardsToggle(){
        setEventData()
        setEventPage('Cards')
    }

    function eventStart(val){
        console.log(val)
        setEventPage('Event')
        setEventData(val)
    }


    function setEventsList(val){props.setEventsList(val)}
    function eventsRefresh(){props.eventsRefresh()}
    function AdminCardsMap(obj)
    {   
        return( 
           obj.approved?<></> : <AdminCard image={obj.eventImg} token={token} name={obj.eventName} eventsList={eventsList}  eventsRefresh={eventsRefresh} setEventsList={setEventsList} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} buttonText='Approve'/>
        )
    }

    return(
        <div>
        {(eventsSetter=='Cards')?<h1 className="event-headers">Requests</h1>:<></>} 
            {(eventsList)&&(eventsSetter=='Cards')? eventsList.map(AdminCardsMap):<></>}
            {(eventsList)&&(eventsSetter=='Cards')? <EventsCard  eventsList={eventsList} setEventsList={setEventsList} eventStart={eventStart} buttonText='Details' userType={1}/> :(eventsSetter=='Event')?<StartEvent eventData={startEventData} CardsToggle={CardsToggle}/>:<></> }
        </div>
    )
}
export default Admin