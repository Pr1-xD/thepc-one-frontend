import React,{useEffect,useState} from 'react'
import axios from 'axios'
import EventsCard from './EventsCard'

function Admin(props){
    const [eventsList,setEventsList] = useState(null)

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
        <div>
            ADMIN
        <h1>Live events</h1>
            {eventsList ? <EventsCard  eventsData={eventsList} />:<br/>}
        </div>
    )
}
export default Admin