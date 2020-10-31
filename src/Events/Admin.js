import React,{useEffect,useState} from 'react'
import axios from 'axios'
import EventsCard from './EventsCard'
import AdminCard from '../Card/AdminCard'

function Admin(props){
    const [eventsList,setEventsList] = useState(null)
    const token=props.token
    
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
           obj.approved?<br/> : <AdminCard token={token} name={obj.name} name={obj.eventName} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} buttonText='Approve'/>
        )
    }

    return(
        <div>
            ADMIN
        <h1>Requests</h1> 
            {eventsList? eventsList.map(AdminCardsMap):<br />}
        <h1>Live events</h1>
            {eventsList ? <EventsCard  eventsData={eventsList} buttonText='Details' userType={1}/> :<></> }
        </div>
    )
}
export default Admin