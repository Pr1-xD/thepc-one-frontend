import React,{useEffect,useState} from 'react'
import axios from 'axios'
import EventsCard from './EventsCard'
import AdminCard from '../Card/AdminCard'

function Admin(props){
    const [eventsList,setEventsList] = useState(null)
    const token=props.token
    const eventsData=props.eventsData
    
    useEffect(() => {
      axios.get('https://thepc-one.herokuapp.com/api/allEvents')
      .then((response) => {
          console.log(response);
          setEventsList(response.data);
      }, (error) => {
          console.log(error);
      });    
    },[])

    function AdminCardsMap(obj)
    {   
        return( 
           obj.approved?<></> : <AdminCard token={token} name={obj.eventName} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} buttonText='Approve'/>
        )
    }

    return(
        <div>
        <h1 className="event-headers">Requests</h1> 
            {eventsList? eventsList.map(AdminCardsMap):<></>}
            {eventsData ? <EventsCard  eventsData={eventsData} buttonText='Details' userType={1}/> :<></> }
        </div>
    )
}
export default Admin