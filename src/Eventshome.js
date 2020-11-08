import React , {useState,useEffect} from 'react'
import axios from 'axios'
import "./Eventshome.css"
import HomeCards from './HomeCards'

function Eventshome(props){
    const userData=props.data
    const [eventsList, setEventsList] = useState(null);

    function eventsRegister(val){props.eventsRegister(val)}

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
        <div className="eventsHomeCard">
            <h1 className="events_title">Events</h1>
            {eventsList?<HomeCards data={eventsList} eventsRegister={eventsRegister} userData={userData}/> :<br/>}
        </div>
    )
}

export default Eventshome