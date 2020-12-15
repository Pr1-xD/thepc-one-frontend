import React,{useEffect,useState} from 'react'
import EventsCard from './EventsCard'
import AdminCard from '../Card/AdminCard'
import StartEvent from './StartEvent'
import Loader from '../Loader'
import ViewSubmissions from './ViewSubmissions'

function Admin(props){
    const darkTheme=props.darkTheme
    const formFilled=props.formFilled
    const eventsList=props.eventsList
    const token=props.token
    const [startEventData,setEventData]=useState()
    const [eventsSetter,setEventPage]=useState('Cards')

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
    function handleEventState(val){setEventPage(val)}
    function setEventsList(val){props.setEventsList(val)}
    function eventsRefresh(){props.eventsRefresh()}
    function formSubmitted(){props.formSubmitted()}
    function AdminCardsMap(obj)
    {   
        return( 
           obj.approved?<></> : <AdminCard darkTheme={darkTheme} image={obj.eventImg} token={token} name={obj.eventName} eventsList={eventsList} textTime={obj.textTime} eventsRefresh={eventsRefresh} setEventsList={setEventsList} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} buttonText='Approve'/>
        )
    }

    return(
        <>
        {(eventsSetter=='Cards')&&(eventsList)?<h1 className={darkTheme?"event-headers-dark":"event-headers"}>Requests</h1>:<></>} {/* ADD CONDITIONAL RENDERING */}
        {(eventsList)&&(eventsSetter=='Cards')? eventsList.map(AdminCardsMap):<></>}
        {(eventsList)&&(eventsSetter=='Cards')? <EventsCard  eventsList={eventsList} setEventsList={setEventsList} handleEventState={handleEventState} eventStart={eventStart}  formFilled={formFilled} userType={1}/> :(eventsSetter=='Event')?<StartEvent eventData={startEventData} CardsToggle={CardsToggle} darkTheme={darkTheme} token={token} formFilled={formFilled} formSubmitted={formSubmitted}/>:(eventsSetter=='Submissions')?<ViewSubmissions handleEventState={handleEventState} CardsToggle={CardsToggle} token={token} darkTheme={darkTheme}/>:<></> }
        </>
    )
}
export default Admin