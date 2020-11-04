import React,{useEffect,useState} from 'react'
import axios from 'axios'
import EventsCard from './EventsCard'
import CreateEvent from './CreateEvent'

function Member(props){
    const [EventsState,setEventsState]=useState('cards')
    const [eventsList,setEventsList] = useState(null)
    const token=props.token
    function handleEventState(val)
    { setEventsState(val)}

    useEffect(() => {
      axios.get('https://thepc-one.herokuapp.com/api/allEvents')
      .then((response) => {
          console.log(response);
          setEventsList(response.data);
      }, (error) => {
          console.log(error);
      });    
    },[])

    return(
        <>
        <h1 className="event-headers">Live events</h1>
        <button className="btn btn-lg btn-primary btn-block" type="button" onClick={()=>handleEventState('Create')}>Create Event</button>
         {((eventsList!=null)&&(EventsState=='cards')) ? <EventsCard  eventsData={eventsList} userType={0}/>:<CreateEvent token={token} handleEventState={handleEventState}/>}
        </>
    )
}
export default Member