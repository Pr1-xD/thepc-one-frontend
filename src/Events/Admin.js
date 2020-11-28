import React,{useEffect,useState} from 'react'
import axios from 'axios'
import EventsCard from './EventsCard'
import AdminCard from '../Card/AdminCard'

function Admin(props){
    const eventsList=props.eventsList
    const token=props.token
    function setEventsList(val){props.setEventsList(val)}
    function eventsRefresh(){props.eventsRefresh()}
    function AdminCardsMap(obj)
    {   
        return( 
           obj.approved?<></> : <AdminCard token={token} name={obj.eventName} eventsList={eventsList} eventsRefresh={eventsRefresh} setEventsList={setEventsList} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} buttonText='Approve'/>
        )
    }

    return(
        <div>
        <h1 className="event-headers">Requests</h1> 
            {eventsList? eventsList.map(AdminCardsMap):<></>}
            {eventsList? <EventsCard  eventsList={eventsList} setEventsList={setEventsList} buttonText='Details' userType={1}/> :<></> }
        </div>
    )
}
export default Admin